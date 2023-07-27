const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};const middle = (list) => {
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


console.log(middle([1, 2, 3, 4, 5])) //=> ['3'] middle position - 2
console.log(middle(['a', 'b', 'c', 'd'])) //=> ['b', 'c'] middle position - 1, 2
console.log(middle([1, 2, 3])) //=> [2]
console.log(middle([1])) //=> []
console.log(middle([])) //=> []

let planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14
};

for (let planet in planetMoons) {
  let numberOfMoons = planetMoons[planet];
  console.log("Planet: " + planet + ", # of Moons: "+ numberOfMoons);
}