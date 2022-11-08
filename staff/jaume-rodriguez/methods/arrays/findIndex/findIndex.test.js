// CASE 1 returns 130 as the result to the condition accomplish function 
// callback from the array [5, 12, 8, 130, 44]

var finInArray1 = [5, 12, 8, 130, 44];

var finInCondition1 = (element) => { return element > 13}

var result = findIndex(finInArray1, finInCondition1);