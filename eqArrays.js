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
module.exports = eqArrays;

