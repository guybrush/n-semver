#!/usr/bin/env sh

display_help() {
  cat <<-help

  Usage:

      n-semver <version-range> [args ...]
      n-semver-version <version-range>
      n-semver-npm <version-range>

  Example: execute foo.js with the node-version which max-satisfies '~0.6'

      n-semver ~0.6 foo.js -p 3000

  Example: print max-satisfying installed node-version for '~0.6'

      n-semver-version ~0.6

  Example: execute matching npm with the node-version which max-satisfies '~0.6'

      n-semver-npm ~0.6 install a-module-with-node-plugin

help
  exit 0
}

if test $# -eq 0; then
  display_help
else
  local version=`n-semver-version $1`
  echo "node@"$version `n which $version`
  shift
  n as $version $@
fi
