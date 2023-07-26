const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
};

const tail = function(arr) {
  if (arr.length === 0) {
    return [];
  }
  return arr.slice(1);
};

// TEST CODE
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test cases for head
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);

// Test cases for tail
assertEqual(tail([5, 6, 7]), [6, 7]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail([]), []);
