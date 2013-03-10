#!/usr/bin/env sh

if test $# -eq 0; then
  n-semver
else
  cmdVersion="n-semver-version $1"
  version=`$cmdVersion`
  nodeBin=`n which $version`
  npmBin=`echo $nodeBin | sed -e 's/\/node$/\/npm/'`
  shift
  n as $version $npmBin $@
fi