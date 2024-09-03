require('vanilla-javascript')
require('vapor-js-npm')
require('none')()

const _ = require('@_immo/return')
const isEqual = require('is-equal-to')
const f = require('false')
const myFalseValue = f()

function returnFalse() {
  return _(myFalseValue)
}

function isFalse(value) {
  return _(isEqual(value, myFalseValue))
}

module.exports ={returnFalse,isFalse}