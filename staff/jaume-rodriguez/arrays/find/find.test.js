// CASE 1 returns 12 as a first element who accomplish the 
// callback function condition

var finArray1 = [5, 12, 8, 130, 44];

var finCondition1 = (element) => { return element > 10};

var result = find(finArray1, finCondition1);

// CASE 1.2 returns undefined as a non find elements from the array
// who did not accomplish the callback function condition

var finArray2 = [5, 12, 8, 130, 44];

var finCondition2 = (element) => element > 1000;

var result = find(finArray2, finCondition2);

// CASE 1.3 returns true as a non find elements from the array
// who did not accomplish the callback function condition

var finArray3 = [5, true, 8, 'hola', null, 'adios'];

var finCondition3 = (element) => {
    return typeof element !== 'number' && typeof element !== 'boolean'
};

var result = find(finArray3, finCondition3);