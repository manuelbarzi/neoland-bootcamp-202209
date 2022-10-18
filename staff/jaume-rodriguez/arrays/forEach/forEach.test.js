// CASE 1 returns all elements from the array separated each in a new string

var feArray1 = ['a', 'b', 'c'];

var feCondition1 = (element) => { return element}

var result = forEach(feArray1, feCondition1)

// CASE 2 returns 11, 14, 25 for the array [1, 4, 15] as a result
// to the callback condition function

var feArray2 = [1, 4, 15];

var feCondition2 = (element) => { return element + 10 }

var result = forEach(feArray2, feCondition2)