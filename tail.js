// const head = function(arr) {
//   if (arr.length === 0) {
//     return undefined;
//   }
//   return arr[0];
// };

const tail = function(arr) {
  if (arr.length === 0) {
    return [];
  }
  return arr.slice(1);
};

// // TEST CODE
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


module.exports = tail;