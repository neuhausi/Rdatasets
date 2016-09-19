#!/stf/sys/bin/perl -w

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
use Data::Dumper;

$Data::Dumper::Sortkeys = 1;

my $DESCRIPTION = <<DESCRIPTION;

   This program generates all the json object files for CanvasXpress

   -dataset    : <string> dataset name

DESCRIPTION

my ( $dataset, $help );

GetOptions(
  "dataset=s" => \$dataset,
  "help!"     => \$help
) or die $DESCRIPTION;

die $DESCRIPTION if $help;

&main;

sub main {

  &process_data;

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
        next unless $dataset eq $ds;
      }
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

sub create_json {

  my ( $lib, $ds, $title ) = @_;

  my ( @header, $i, $ii, $j, @line, $data, $unique, @rows, $json, $type, $config, $after, $t, $s, $n, $u, $c, $info, @keys, $ts );

  my $csv = "csv/$lib/$ds.csv";
  my $doc = "doc/$lib/$ds.html";

  print "Processing dataset $ds in $lib\n";
  open( FILE, "$csv" ) or die "Couldn't open $csv: $!\n";
  $_ = <FILE>;
  chomp;
  s/"//g;
  @header = split( ",", $_ );
  $header[0] = 'Rows';
  $u = 1;
  while (<FILE>) {
    chomp;
    s/"//g;
    next unless /\w/;
    (@line) = split( ",", $_ );
    if ( $unique->{ $line[0] } ) {
      $u = 0;
    }
    $unique->{ $line[0] }++;
    push @$data, [@line];
    $n++;
  }
  close FILE;

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

  if ($t < 1) {
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

  ## Create Object
  if ($t == 1) {
    if ($c) {
      $config->{graphType} = 'Boxplot';              
    } else {
      if (scalar @$data > 20) {
        $config->{graphType} = 'Treemap';
        $ts++;
      } else {
        $config->{graphType} = 'Bar';        
      }
    } 
  } elsif ($t == 2) {
    $config->{graphType} = 'Scatter2D';    
    $ts++;
  } elsif ($t == 3) {
    $config->{graphType} = 'Scatter3D';
    $ts++;
  } elsif ( $t > 3 && $t < 6 ) {
    $config->{graphType}         = 'Scatter2D';
    $config->{scatterPlotMatrix} = 1;
    $ts++;
  } elsif ( $t > 10 && scalar @$data > 10 ) {
    $config->{graphType} = 'Heatmap';
  } else {
    $config->{graphType} = 'Scatter2D';    
    $ts++;
  }

  if ( $t > 3 || $t == 1) {
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
  } else {
    if ( scalar @{ $json->{y}{smps} } == 1 ) {
      if ( scalar @{ $json->{y}{vars} } > 20 ) {
        $config->{graphType} = 'Treemap';
      } elsif ( scalar @{ $json->{y}{vars} } > 10 ) {
        $config->{graphType} = 'Pie';
      } else {
        $config->{graphType} = 'Bar';
      }
    } elsif ( scalar @{ $json->{y}{vars} } == 1 ) {
      if ($json->{x}) {
        @keys = keys %{$json->{x}};
        if (scalar @keys == 1) {
          $config->{graphType} = 'Boxplot';
          $config->{groupingFactors} = [$keys[0]];
        } elsif (scalar @keys == 2) {
          $config->{graphType} = 'Bar';
          $config->{segregateSamplesBy} = [$keys[0], $keys[1]];          
        } else {
          $config->{graphType} = 'Boxplot';
          $config->{groupingFactors} = [$keys[0]];          
        }
      } elsif ( scalar @{ $json->{y}{smps} } > 20 ) {
        $config->{graphType} = 'Treemap';
      } elsif ( scalar @{ $json->{y}{smps} } > 10 ) {
        $config->{graphType} = 'Pie';
      } else {
        $config->{graphType} = 'Bar';
      }
    } elsif ( scalar @{ $json->{y}{smps} } == 2 ) {
      $config->{graphType} = 'Scatter2D';
    } elsif ( scalar @{ $json->{y}{smps} } == 3 ) {
      $config->{graphType} = 'Scatter3D';
    } elsif ( scalar @{ $json->{y}{smps} } > 3 && scalar @{ $json->{y}{smps} } < 6 ) {
      $config->{graphType}         = 'Scatter2D';
      $config->{scatterPlotMatrix} = 1;
    } elsif ( scalar @{ $json->{y}{vars} } > 20 && scalar @{ $json->{y}{smps} } > 20 ) {
      $config->{graphType} = 'Heatmap';
    } else {
      $config->{graphType} = 'Scatter2D';
    }
    $config->{title}    = $title;
    $config->{subtitle} = "$lib - $ds";

    if ($after) {
      $data = {
        data   => $json,
        config => $config,
        after  => $after,
        info   => $info
      };
    } else {
      $data = {
        data   => $json,
        config => $config,
        info   => $info
      };
    }

    mkpath("json/$lib") unless -d "json/$lib";

    open( FILE, ">json/$lib/$ds.json" );
    print FILE JSON->new->pretty->allow_nonref->encode($data);
    close FILE;
  }

}
