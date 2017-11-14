var reg = /([^?=&]+)(=([^&]*))?/g
var assert = require('assert')

module.exports = qs

function qs (url) {
  assert.equal(typeof url, 'string', 'nanoquery: url should be type string')
  assert.ok(typeof window !== 'undefined', 'nanoquery: expected window to exist')

  var obj = {}
  url.replace(/^.*\?/, '').replace(reg, function (a0, a1, a2, a3) {
    obj[window.decodeURIComponent(a1)] = window.decodeURIComponent(a3)
  })

  return obj
}
