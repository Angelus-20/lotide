const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

findKey = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

function stars(obj, stars) {
  for (const key in obj) {
    if (obj[key].stars === stars) {
      return key;
    }
  }
};

const result1 = stars(findKey, 2);
assertEqual(result1, "noma");
const result4 = stars(findKey, 2);
assertEqual(result4, "Ora");
const result2 = stars(findKey, 3);
assertEqual(result2, "Akaleri");
const result3 = stars(findKey, 3);
assertEqual(result3, "elBulli");