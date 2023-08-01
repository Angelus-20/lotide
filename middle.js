const assertEqual = require(`./assertEqual`)

// const assertEqual = function(actual, given) {
//   const result = eqArrays(actual, given);
//   if (result === true) {
//     console.log(`✅ Assertion Passed: ${actual} === ${given}`);
//   } else {
//     console.log(`❌ Assertion Failed: ${actual} !== ${given}`);
//   }
// };

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false; // check for length
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false; // checks for values in that length
    }
  }
  return true;  
};

const middle = (list) => {
  if (list.length < 3) {
      return []
  }
  
  if (list.length % 2 === 0) {
      const middleIndex1 = Math.floor(list.length / 2) - 1 // middleIndex in this case represents [i]
      const middleIndex2 = Math.floor(list.length / 2)
      const element1 = list[middleIndex1] // refers to that index on the list
      const element2 = list[middleIndex2]
      
      return [element1, element2]
  }
  
  if (list.length % 2 !== 0) {
      const middleIndex = Math.floor(list.length / 2)
      const element = list[middleIndex]
      return [element]
  }
  
};


// console.log(middle([1, 2, 3, 4, 5])) //=> ['3'] middle position - 2
// console.log(middle(['a', 'b', 'c', 'd'])) //=> ['b', 'c'] middle position - 1, 2
// console.log(middle([1, 2, 3])) //=> [2]
// console.log(middle([1])) //=> []
// console.log(middle([])) //=> []

module.exports = middle;