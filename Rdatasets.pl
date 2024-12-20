#!/usr/bin/perl -w

# Copyright 2016 Isaac Neuhaus, Bristol-Myers Squibb.  All rights reserved.

BEGIN {

  $| = 1;
  umask 002;

}

use strict;
use Getopt::Long;
use File::Path;
use Scalar::Util qw(looks_like_number);
use Cwd;
use JSON;
use Text::CSV qw( csv );
use HTML::TagParser;
use Data::Dumper;

$Data::Dumper::Sortkeys = 1;

my $DESCRIPTION = <<DESCRIPTION;

   This program generates all the json object files for CanvasXpress

   -dataset    : <string> dataset name

DESCRIPTION

my ( $dataset, $help, $blacklist );

GetOptions(
  "dataset=s" => \$dataset,
  "help!"     => \$help
) or die $DESCRIPTION;

die $DESCRIPTION if $help;

$blacklist->{'HHSCyberSecurityBreaches'}++;
$blacklist->{'breaches'}++;
$blacklist->{'USstateAbbreviations'}++;
$blacklist->{'bfi.dictionary'}++;
$blacklist->{'epi.dictionary'}++;
$blacklist->{'nace_rev2'}++;
$blacklist->{'military'}++;
$blacklist->{'flights'}++;
$blacklist->{'grants_other'}++;
$blacklist->{'CO2'}++;
$blacklist->{'co2'}++;

&main;

sub main {

  #&process_data;
  &create_summary;
  #&delete_files;

}

sub create_summary {

  my $sets = {};

  my $main = "datasets.csv";
  my $data;
  my @line;
  my $csv = parse_csv($main);
  my @header = @{$csv->{header}};
  open my $fh, ">:encoding(UTF-8)", "datasetsCX.csv" or die "Could not open datasetsCX.csv: $!";
  print $fh join(",", @header) . "\n";
  unshift (@$data, \@header);
  foreach my $row (@{$csv->{data}}) {
    @line = ();
    foreach my $key (@header) {
      $row->{$key} =~ s/\n/ /g;
      $row->{$key} =~ s/\"/ /g;
      $row->{$key} =~ s/,/;/g;
      if ($key eq "CSV") {
        push @line, "<a onclick=&quot;CanvasXpress.callbackRDataset('https://raw.githubusercontent.com/neuhausi/Rdatasets/refs/heads/master/csv/$row->{'Package'}/$row->{'Item'}.csv');&quot; href=&quot;#&quot;>Select $row->{'Item'}</a>";
      } elsif ($key eq "Doc") {
        push @line, "<a onclick=&quot;CanvasXpress.callbackRDataset('https://raw.githubusercontent.com/neuhausi/Rdatasets/refs/heads/master/json/$row->{'Package'}/$row->{'Item'}Info.json');&quot; href=&quot;#&quot;>$row->{'Item'} Info</a>";
      } else {
        push @line, $row->{$key};
      }
    }
    push @$data, [@line];
    print $fh join(",", @line) . "\n";
  }
  close $fh;

}

sub delete_files {

  my $del = [
    'js/openintro/military.js',
    'json/openintro/military.json',
    'csv/datasets/military.csv',
    'doc/datasets/military.html',
    'doc/datasets/rst/military.rst',
    'js/nycflights13/flights.js',
    'json/nycflights13/flights.json',
    'csv/datasets/flights.csv',
    'doc/datasets/flights.html',
    'doc/datasets/rst/flights.rst',
    'js/modeldata/grants_other.js',
    'json/modeldata/grants_other.json',
    'csv/datasets/grants_other.csv',
    'doc/datasets/grants_other.html',
    'doc/datasets/rst/grants_other.rst',
    'js/datasets/CO2.js',
    'json/datasets/CO2.json',
    'csv/datasets/CO2.csv',
    'doc/datasets/CO2.html',
    'doc/datasets/rst/CO2.rst',
    'js/datasets/co2.js',
    'json/datasets/co2.json',
    'csv/datasets/co2.csv',
    'doc/datasets/co2.html',
    'doc/datasets/rst/co2.rst'
  ];

  foreach my $file (@$del) {
    unlink $file if -e $file;
  }

}

sub process_data {

  my $main = "datasets.csv";

  my ( $sets, $lib, $ds, $title, $cont );

  open( FILE, "$main" ) or die "Couldn't open $main: $!\n";
  $_ = <FILE>;
  while (<FILE>) {
    chomp;
    s/"//g;
    ( $lib, $ds, $title ) = split( ",", $_ );
    $sets->{$lib}{$ds} = $title;
  }
  close FILE;

  open( FILE, ">datasets.json" );
  print FILE JSON->new->pretty->allow_nonref->encode($sets);
  close FILE;

  foreach $lib ( sort { lc($a) cmp lc($b) } keys %$sets ) {
    undef $cont;
    foreach $ds ( sort { lc($a) cmp lc($b) } keys %{ $sets->{$lib} } ) {
      if ($dataset) {
        next unless $dataset eq $ds || $dataset eq $lib;
      }
      next if $blacklist->{$ds};
      push @{$cont}, [ $ds, "https://raw.githubusercontent.com/neuhausi/Rdatasets/master/json/$lib/$ds.json" ];
      &create_json( $lib, $ds, $sets->{$lib}{$ds} );
    }
    if ( !$dataset ) {
      open( FILE, ">json/$lib/datasets.json" );
      print FILE JSON->new->pretty->allow_nonref->encode($cont);
      close FILE;
    }
  }

}

sub parse_html {

  my ($doc) = @_;

  my $obj = {};

  my $html = HTML::TagParser->new( $doc );
  ## All elements are in main
  my $main = $html->getElementsByTagName("main");
  if (!$main) {
    $main = $html->getElementsByClassName("container");
    if (!$main || $main->tagName() ne "div") {
      return $obj;
    }
  }
  ## The first child is the table
  my $elem = $main->firstChild();
  ## The next sibling is the title
  $elem = $elem->nextSibling();
  if ($elem->tagName() eq "h2") {
    $obj->{title} = $elem->innerText();
    $elem = $elem->nextSibling();
  }
  ## The next sibling is the description
  if ($elem->tagName() eq "h3") {
    $obj->{description} = $elem->innerText();
    $elem = $elem->nextSibling();
  }
  ## Description may have multiple paragraphs
  while ($elem->tagName() ne "h3") {
    $obj->{description} .= "\n". $elem->innerText();
    $elem = $elem->nextSibling();
  }
  ## The next sibling is the usage
  if ($elem->tagName() eq "h3") {
    $elem = $elem->nextSibling();
    $obj->{usage} = $elem->innerText();
    $elem = $elem->nextSibling();
  }
  ## The next sibling is the format
  if ($elem && $elem->tagName() eq "h3") {
    $elem = $elem->nextSibling();
    $obj->{format} = $elem->innerText();
  }
  ## The next sibling ar the parameters
  ## that can be in a dl or ul
  $elem = $html->getElementsByTagName("dl");
  if (!$elem) {
    $elem = $html->getElementsByTagName("ul");
  }
  if ($elem) {
    if ($elem->tagName() eq "dl") {
      my $chld = $elem->childNodes();
      for (my $i = 0; $i < scalar @$chld; $i += 2) {
        if ($chld->[$i] && $chld->[$i + 1]) {
          $obj->{parameters}{$chld->[$i]->innerText()} =$chld->[$i + 1]->innerText();
        }
      }
    } elsif ($elem->tagName() eq "ul") {
      my $chld = $elem->childNodes();
      for (my $i = 0; $i < scalar @$chld; $i++) {
        my $chil = $chld->[$i];
        my ($p, $v) = split( ":", $chil->innerText());
        $obj->{parameters}{$p} = $v;
      }
    }
  }
  ## The next sibling we want is the references
  while ($elem && $elem->tagName() ne "h3" && $elem->innerText() ne "References") {
    $elem = $elem->nextSibling();
  }
  if ($elem && $elem->tagName() eq "h3" && $elem->innerText() ne "References") {
    $elem = $elem->nextSibling();
    $obj->{reference} = $elem->innerText();
  }

  return $obj;

}

sub parse_csv {

  my ($csv_file) = @_;
  # Create a new Text::CSV object
  my $csv = Text::CSV->new({ binary => 1, auto_diag => 1 });
  # Open the CSV file
  open my $fh, "<:encoding(utf8)", $csv_file or die "Could not open '$csv_file': $!";
  # Read the header line
  my $header = $csv->getline($fh);
  $csv->column_names(@$header);
  # Read the rest of the lines
  my @rows;
  while (my $row = $csv->getline_hr($fh)) {
    push @rows, $row;
  }
  # Close the file handle
  close $fh;
  return {
    data => \@rows,
    header => $header
  };
}

sub create_json {

  my ( $lib, $ds, $title ) = @_;

  my ( @header, $len, $i, $ii, $j, @line, $data, $unique, @rows, $json, $type, $config, $after, $t, $s, $n, $u, $c, $info, @keys, $l, $ts, $fh, $obj );

  if ($ds =~ / \(.+\)/) {
    $ds =~ s/ \(.+\)//;
  }

  my $csv = "csv/$lib/$ds.csv";
  my $doc = "doc/$lib/$ds.html";

  print "Processing dataset $ds in $lib\n";
  $csv = parse_csv($csv);
  $obj = parse_html($doc);
  @header = @{$csv->{header}};
  $u = 1;
  foreach my $row (@{$csv->{data}}) {
    @line = ();
    foreach my $key (@header) {
      $row->{$key} =~ s/\n/ /g;
      $row->{$key} =~ s/\"/ /g;
      push @line, $row->{$key};
    }
    if ( $unique->{ $line[0] } ) {
      $u = 0;
    }
    $unique->{ $line[0] }++;
    push @$data, [@line];
    $n++;
    #print join(",", @line) . "\n";
  }
  #print join(",", @header) . "\n";

  return unless $n;

  $t = 0;
  $c = 0;
  ## Find Types
  for ( $i = 0 ; $i < scalar @header ; $i++ ) {
    $type->[$i] = 'Numeric';
    for ( $j = 0 ; $j < scalar @$data ; $j++ ) {
      if ( defined $data->[$j][$i] && $data->[$j][$i] eq 'NA' ) {
        undef $data->[$j][$i];
      }
      if ( defined $data->[$j][$i] && !looks_like_number( $data->[$j][$i] ) ) {
        $type->[$i] = 'String';
      }
    }
    $t++ if $type->[$i] eq 'Numeric';
    $c++ if $type->[$i] eq 'String';
  }

  ## Check if first column is just a sequence
  if ( $type->[0] eq 'Numeric' ) {
    for ( $i = 0 ; $i < scalar @{$data} ; $i++ ) {
      if ( $data->[$i][0] eq ( $i + 1 ) ) {
        $s++;
      } else {
        undef $s;
        last;
      }
    }
  }
  if ($s) {
    $t--;
    shift @header;
    shift @{$type};
    $u = 0;
    for ( $i = 0 ; $i < scalar @{$data} ; $i++ ) {
      shift @{ $data->[$i] };
    }
  } elsif ($u) {
    $t-- if $type->[0] eq 'Numeric';
    shift @header;
    shift @{$type};
    for ( $i = 0 ; $i < scalar @{$data} ; $i++ ) {
      push @rows, shift @{ $data->[$i] };
    }
  }

  if ( $t < 1 ) {
    $t++;
    push @{$type}, 'Numeric';
    push @header, 'Row';
    for ( $i = 0 ; $i < scalar @{$data} ; $i++ ) {
      push @{ $data->[$i] }, $i + 1;
    }
  }

  open( FILE, "$doc" ) or die "Couldn't open $doc: $!\n";
  while (<FILE>) {
    next if /DOCTYPE/;
    next if /http-equiv=/;
    next if /stylesheet/;
    next if /\<\/head\>\<body\>/;
    next if /\<\/body\>\<\/html\>/;
    next unless /\w/;
    $info .= $_;
  }
  close FILE;

  ## Assign Graph Type
  $l = scalar @$data;
  if ( $t == 1 ) {
    if ($c) {
      $config->{graphType} = 'Boxplot';
      $ts++;
    } else {
      if ( $l > 20 ) {
        $config->{graphType} = 'Treemap';
        $ts++;
      } elsif ( $l > 10 ) {
        $config->{graphType} = 'Pie';
      } else {
        $config->{graphType} = 'Bar';
        $ts++;
      }
    }
  } elsif ( $t == 2 ) {
    $config->{graphType} = 'Scatter2D';
  } elsif ( $t == 3 ) {
    $config->{graphType} = 'Scatter3D';
  } elsif ( $t > 3 && $t < 6 ) {
    $config->{graphType}         = 'Scatter2D';
    $config->{scatterPlotMatrix} = 1;
  } elsif ( $t > 10 && $l > 10 ) {
    $config->{graphType} = 'Heatmap';
    $ts++;
  } else {
    if ( $l == 2 ) {
      $config->{graphType} = 'Scatter2D';
      $ts++;
    } elsif ( $l == 3 ) {
      $config->{graphType} = 'Scatter3D';
      $ts++;
    } elsif ( $l > 3 && $l < 6 ) {
      $config->{graphType}         = 'Scatter2D';
      $config->{scatterPlotMatrix} = 1;
      $ts++;
    } elsif ( $l > $t ) {
      $config->{graphType} = 'Heatmap';
      $ts++;
    } else {
      $config->{graphType} = 'Scatter2D';
      $ts++;
    }
  }

  ## Create object
  if ($ts) {
    if ( @rows && scalar @rows == scalar @$data ) {
      @{ $json->{y}{smps} } = @rows;
    } else {
      for ( $i = 0 ; $i < scalar @$data ; $i++ ) {
        push @{ $json->{y}{smps} }, 'Smp' . ( $i + 1 );
      }
    }
    $ii = 0;
    for ( $i = 0 ; $i < scalar @header ; $i++ ) {
      if ( $type->[$i] eq 'Numeric' ) {
        push @{ $json->{y}{vars} }, $header[$i];
        for ( $j = 0 ; $j < scalar @$data ; $j++ ) {
          $json->{y}{data}[$ii][$j] = defined $data->[$j][$i] ? $data->[$j][$i] + 0 : '';
        }
        $ii++;
      } else {
        for ( $j = 0 ; $j < scalar @$data ; $j++ ) {
          push @{ $json->{x}{ $header[$i] } }, $data->[$j][$i];
        }
      }
    }
  } else {
    if ( @rows && scalar @rows == scalar @$data ) {
      @{ $json->{y}{vars} } = @rows;
    } else {
      for ( $i = 0 ; $i < scalar @$data ; $i++ ) {
        push @{ $json->{y}{vars} }, 'Var' . ( $i + 1 );
      }
    }
    $ii = 0;
    for ( $i = 0 ; $i < scalar @header ; $i++ ) {
      if ( $type->[$i] eq 'Numeric' ) {
        push @{ $json->{y}{smps} }, $header[$i];
        for ( $j = 0 ; $j < scalar @$data ; $j++ ) {
          $json->{y}{data}[$j][$ii] = defined $data->[$j][$i] ? $data->[$j][$i] + 0 : '';
        }
        $ii++;
      } else {
        for ( $j = 0 ; $j < scalar @$data ; $j++ ) {
          push @{ $json->{z}{ $header[$i] } }, $data->[$j][$i];
        }
      }
    }
  }
  if ( !$json->{y}{smps} || !$json->{y}{vars} ) {
    print "$lib -> $ds\n";
    print "Header:\n";
    print Dumper( \@header );
    print "Type:\n";
    print Dumper($type);
    print "Data:\n";
    print Dumper($data);
    print "Rows:\n";
    print Dumper( \@rows );
    print "Numeric = $t\n";
    print "Sequence = $s\n";
    print "Unique = $u\n";
    print "$lib -> $ds\n";
    exit;
  }

  ## Collect metadata
  if ( $json->{x} ) {
    @keys = keys %{ $json->{x} };
  } elsif ( $json->{z} ) {
    @keys = keys %{ $json->{z} };
  } else {
    @keys = ();
  }
  ## Add additional configuration
  $config->{title}    = $title;
  $config->{subtitle} = "$lib - $ds";
  if ( $config->{graphType} eq 'Bar' ) {
    ## Nothing to do
  } elsif ( $config->{graphType} eq 'Boxplot' ) {
    if ( $c == 1 ) {
      $config->{groupingFactors} = [ $keys[0] ];
      $config->{colorBy}         = "variable";
    } elsif ( $c == 2 ) {
      $config->{groupingFactors}    = [ $keys[0] ];
      $config->{segregateSamplesBy} = [ $keys[1] ];
      $config->{colorBy}            = "variable";
    } elsif ( $c == 3 ) {
      $config->{groupingFactors}    = [ $keys[0] ];
      $config->{segregateSamplesBy} = [ $keys[1], $keys[2] ];
      $config->{colorBy}            = "variable";
    } else {
      $config->{graphType}          = 'Dotplot';
      $config->{groupingFactors}    = [ $keys[0] ];
      $config->{segregateSamplesBy} = [ $keys[1], $keys[2] ];
      $config->{colorBy}            = $keys[3];
    }
  } elsif ( $config->{graphType} eq 'Treemap' ) {
    ## Nothing to do
  } elsif ( $config->{graphType} eq 'Pie' ) {
    ## Nothing to do
  } elsif ( $config->{graphType} eq 'Scatter2D' && !$ts ) {
    if ($c) {
      if ( $c == 1 ) {
        $config->{colorBy} = $keys[0];
      } elsif ( $c == 2 ) {
        $config->{colorBy} = $keys[0];
        $config->{shapeBy} = $keys[1];
      } else {
        $config->{colorBy} = $keys[0];
        $config->{shapeBy} = $keys[1];
        $config->{sizeBy}  = $keys[2];
      }
    }
  } elsif ( $config->{graphType} eq 'Scatter3D' && !$ts ) {
    if ($c) {
      if ( $c == 1 ) {
        $config->{colorBy} = $keys[0];
      } elsif ( $c == 2 ) {
        $config->{colorBy} = $keys[0];
        $config->{shapeBy} = $keys[1];
      } else {
        $config->{colorBy} = $keys[0];
        $config->{shapeBy} = $keys[1];
        $config->{sizeBy}  = $keys[2];
      }
    }
  } elsif ( $config->{graphType} eq 'Heatmap' ) {
    if ($c) {
      if ( $c == 1 ) {
        $config->{smpOverlays} = [ $keys[0] ];
      } elsif ( $c == 2 ) {
        $config->{smpOverlays} = [ $keys[0], $keys[1] ];
      } else {
        $config->{smpOverlays} = [ $keys[0], $keys[1], $keys[2] ];
      }
    }
  } else {
    $config->{graphType} = 'Stacked';
    if ($c) {
      if ( $c == 1 ) {
        $config->{smpOverlays} = [ $keys[0] ];
      } elsif ( $c == 2 ) {
        $config->{smpOverlays} = [ $keys[0], $keys[1] ];
      } else {
        $config->{smpOverlays} = [ $keys[0], $keys[1], $keys[2] ];
      }
    }
  }

  mkpath("js/$lib") unless -d "js/$lib";

  unshift (@$data, \@header);
  open $fh, ">:encoding(UTF-8)", "js/$lib/$ds.js" or die "Could not open js/$lib/$ds.js: $!";
  print $fh "var $ds" . "Info =" . JSON->new->pretty->allow_nonref->encode($obj) . "\n";
  print $fh "var $ds = ";
  print $fh JSON->new->pretty->allow_nonref->encode($data);
  close $fh;

  ## Write data object
  $data = {
    data   => $json,
    config => $config,
    info   => $info
  };

  mkpath("json/$lib") unless -d "json/$lib";

  open $fh, ">:encoding(UTF-8)", "json/$lib/$ds.json" or die "Could not open json/$lib/$ds.json: $!";
  print $fh JSON->new->pretty->allow_nonref->encode($data);
  close $fh;

  open $fh, ">:encoding(UTF-8)", "json/$lib/$ds" . "Info" . ".json" or die "Could not open json/$lib/$ds" . "Info" . ".json: $!";
  print $fh JSON->new->pretty->allow_nonref->encode($obj);
  close $fh;

}
