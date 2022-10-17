// CASE 1 returns false for the array ['1', '4', '2', '7', '5']
// tested by the provided function currentValue < 5

var isBelowThreshold = (currentValue) => { return currentValue < 5;}

var evArray1 = ['1', '4', '2', '7', '5']

var result = every(evArray1, isBelowThreshold)

// CASE 2 returns true for the array ['1', '4', '2', '7', '5']
// tested by the provided function currentValue < 10 from index 2

var isBelowThreshold = (currentValue) => currentValue < 5;

var evArray2 = ['1', '4', '2', '7', '5']

var result = every(evArray2, isBelowThreshold)