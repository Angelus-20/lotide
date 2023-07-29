const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, valueToFind) {
  for (const key in obj) {
    if (obj[key] === valueToFind) {
      return key;
    }
  }
  return undefined; 

  // Iterate through the object to find the key corresponding to the value
  // Check if the valueToFind matches the value in the current key-value pair
  // If a match is found, return the key
  // If no match is found, return undefined
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse", // keys: "values"
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const result1 = findKeyByValue(bestTVShowsByGenre, "The Expanse");
assertEqual(result1, "sci_fi");

const result2 = findKeyByValue(bestTVShowsByGenre, "The Wire");
assertEqual(result2, "comedy");

const result3 = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
assertEqual(result3, undefined);

