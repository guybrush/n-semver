#!/usr/bin/env node

// n as `n-semver ~0.6` script.js

var nSemver = require('../n-semver.js')
var cp = require('child_process')
var semver = require('semver')
var range = process.argv[2] === undefined ? '0.6' : process.argv[2]

nSemver(range, function(err, data){
  if (err) {
    console.error(err)
    return process.exit(1)
  }
  process.stdout.write(data.maxSatisfying)
})