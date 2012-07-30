var ns = require('../n-semver')
var assert = require('assert')

ns('*',function(err,dataA){
  assert.ok(!err,'running n didnt work - is it installed?')
  assert.ok(dataA.versions.length>0)
  ns(dataA.versions[0],function(err,dataB){
    assert.ok(!err)
    assert.equal(dataA.versions[0],dataB.maxSatisfying)
    done()
  })
})

function done(err) {
  if (err) console.error('error:',err) && process.exit(1)
  console.log('all tests passed')
  process.exit()
}

