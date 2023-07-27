const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(positions) {
   
  for (let i = 0; i < positions.length; i++) {
    // look below this for the next steps
    console.log("", i);
    console.log(positions[i]);
    }
  }


assertArraysEqual(letterPositions("hello"), [1]);