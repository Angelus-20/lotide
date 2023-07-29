const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

console.log(eqObjects("scary", "scary"));

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
};

assertObjectsEqual({ a: '1', b: 2 },{ a: '1', b: 2 })

const someObject = {
  foo: 1,
  bar: function() {
    console.log("hello!");
  }
}

someObject.bar();