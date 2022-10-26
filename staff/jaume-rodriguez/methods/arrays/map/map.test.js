// CASE 1 returns [1.5, 7.5, 15, 22.5] as a new array from the
// previous array [1, 5, 10, 15] conditionated by the callback function

var mArray1 = [1, 5, 10, 15];

var mCondition1 = (element) => { return element * 1.5}

var result = map(mArray1, mCondition1);