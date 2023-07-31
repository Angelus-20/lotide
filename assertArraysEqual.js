const eqArrays = require('./eqArrays');

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, given) {
  const result = eqArrays(actual, given);
  if (result === true) {
    console.log(`✅ Assertion Passed: ${actual} === ${given}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${given}`);
  }
};

module.exports = assertArraysEqual;