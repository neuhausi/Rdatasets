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
  )
  or die $DESCRIPTION;

die $DESCRIPTION if $help;

&main;

sub main {

  &process_data;

}

sub process_data {

  my $main = "datasets.csv";

  my ( $sets, $lib, $ds, $title );

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

  foreach $lib ( keys %$sets ) {
    foreach $ds ( keys %{ $sets->{$lib} } ) {
      if ($dataset) {
        next unless $dataset eq $ds;
      }
      &create_json( $lib, $ds, $sets->{$lib}{$ds} );
    }
  }

}

sub create_json {

  my ( $lib, $ds, $title ) = @_;

  my ( @header, $i, $ii, $j, @line, $data, $json, $type, $config, $after, $t, $n, $info );

  my $csv = "csv/$lib/$ds.csv";
  my $doc = "doc/$lib/$ds.html";

  print "Processing dataset $ds\n";
  open( FILE, "$csv" ) or die "Couldn't open $csv: $!\n";
  $_ = <FILE>;
  chomp;
  s/"//g;
  @header = split( ",", $_ );
  shift @header;
  while (<FILE>) {
    chomp;
    s/"//g;
    next unless /\w/;
    ( undef, @line ) = split( ",", $_ );
    push @$data, [@line];
    $n++;
  }
  close FILE;

  return unless $n;

  $t = 0;
  ## Find Types
  for ( $i = 0 ; $i < scalar @header ; $i++ ) {
    $type->[$i] = 'Numeric';
    for ( $j = 0 ; $j < scalar @$data ; $j++ ) {
      if ( defined $data->[$j][$i] && !looks_like_number( $data->[$j][$i] ) ) {
        $type->[$i] = 'String';
      }
    }
    $t++ if $type->[$i] eq 'Numeric';
  }

  return unless $t;

  open( FILE, "$doc" ) or die "Couldn't open $doc: $!\n";
  while (<FILE>) {
    next if /DOCTYPE/;
    next if /http-equiv=/;
    next if /stylesheet/;
    next if /\<\/head\>\<body\>/;
    next if /\<\/body\>\<\/html\>/;
    next unless /\w/;
    s/\n/\\n/;
    $info .= $_;
  }
  close FILE;

  ## Create Object
  if ($t) {
    for ( $i = 0 ; $i < scalar @$data ; $i++ ) {
      push @{ $json->{y}{smps} }, 'Smp' . ( $i + 1 );
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
    for ( $i = 0 ; $i < scalar @$data ; $i++ ) {
      push @{ $json->{y}{vars} }, 'Var' . ( $i + 1 );
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

  if ( scalar @{ $json->{y}{smps} } == 1 ) {
    if ( scalar @{ $json->{y}{vars} } > 20 ) {
      $config->{graphType} = 'Treemap';
    } elsif ( scalar @{ $json->{y}{vars} } > 10 ) {
      $config->{graphType} = 'Pie';
    } else {
      $config->{graphType} = 'Bar';
    }
  } elsif ( scalar @{ $json->{y}{vars} } == 1 ) {
    if ( scalar @{ $json->{y}{smps} } > 20 ) {
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
