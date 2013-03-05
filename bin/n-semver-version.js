#!/usr/bin/env node

// n as `n-semver-version ~0.6` script.js

var nSemver = require('../n-semver.js')
var cp = require('child_process')
var semver = require('semver')
var range = process.argv[2] === undefined ? false : process.argv[2]

if (!range) throw new Error('invalid options, no range defined') 

nSemver(range, function(err, data){
  if (err) throw new Error(err)
  process.stdout.write(data.maxSatisfying)
})
