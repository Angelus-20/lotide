const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const string = "I am very very veeeeeery lost sometimes, but I am not giving up";

const string = "LHL";
const countLetters = function(str) {
  const result = {};
  for (let letter of string) {
    if (result[letter] === undefined) {
      result[letter] = 1;
    } else {
      result[letter]++;
    }
  }
  return result;
}


console.log(countLetters(string));