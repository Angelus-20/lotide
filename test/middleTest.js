
const middle = require(`../middle`)
const assertArraysEqual = require(`../assertArraysEqual`)

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); //=> ['3'] middle position - 2
assertArraysEqual(middle(['a', 'b', 'c', 'd']), ['b', 'c']); //=> ['b', 'c'] middle position - 1, 2
assertArraysEqual(middle([1, 2, 3]), [2]); //=> [2]
assertArraysEqual(middle([1]), []); //=> []
assertArraysEqual(middle([]), []); //=> []