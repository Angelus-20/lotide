const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


const map = function(results) {
  return results.map( word => word[0]);
};

const wordList = ["ground", "control", "to", "major", "tom"];
const wordList2 = ["tiger", "lion", "zebra", "croc"];
const wordList3 = ['mercedez', 'chevy', 'ford'];

let results1 = map(wordList, word => word[0]);
let results2 = map(wordList2, word => word[0]);
let results3 = map(wordList3, word => word[0]);

console.log(results1);
console.log(results2);
console.log(results3);