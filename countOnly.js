const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(firstNames, itemsToCount) {
 //return { "Jason": 1, "Karima": 2, "Fang": 3, "Agouhanna": 4 };
 let result = {}; 
 for (let name of firstNames){
  //console.log(name,itemsToCount[name]);
    if (itemsToCount[name]){
      if (result [name]){
        result [name] = result [name] + 1;
      }
      else {
        result[name] = 1;
      }
    }
  }  
  return result;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

 const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

const results = {}
return results;


