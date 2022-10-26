// CASE 1 returns true as a result to the condition accomplish function 
// callback from the array [1, 2, 3, 4, 5]

var somArray1 = [1, 2, 3, 4, 5];

var somCondition1 = (element) => {return element * 3 === 12}

var result = some(somArray1, somCondition1);