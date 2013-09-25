module.exports = nSemver

var cp = require('child_process')
var semver = require('semver')

function nSemver(range, cb) {
  cb = arguments.length == 2 ? cb : function(){}
  range = arguments.length == 2 ? range : null
  if (!range) 
    return cb(new Error('no range defined - nSemver(range,cb)'))
  cp.exec('n',function(err, stdout, stderr){
    if (err)
      return cb(err)
    var d = stdout.toString()
    var versions = d.match(/\d+\.\d+\.\d+/g)
    if (!versions)
      return cb(new Error('did not find any installed node-version'))
    versions.sort()
    var maxSatisfying = semver.maxSatisfying(versions, range)
    if (!maxSatisfying)
      return cb(new Error('no satisfying node-version installed'))
    cb(null, {versions:versions, maxSatisfying:maxSatisfying})
  })
}

