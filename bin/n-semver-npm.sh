if test $# -eq 0; then
  n-semver
else
  cmdVersion="n-semver-version $1"
  shift
  version=`$cmdVersion`
  nodeBin=`n which $version`
  binRegex='(.*)\/node$'
  [[ $nodeBin =~ $binRegex ]]
  npmBin=${BASH_REMATCH[1]}"/npm"
  n as $version $npmBin $@
fi