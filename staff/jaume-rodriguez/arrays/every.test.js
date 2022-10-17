// CASE 1 returns false for the array ['1', '4', '2', '7', '5']
// tested by the provided function currentValue < 5

var isBelowThreshold1 = (currentValue) => {return currentValue < 5;}

/* var isBelowThreshold = (currentValue, index, array) => {     
    if (index > 3){
        return currentValue < 5;
    }
    return false
} */

var evArray1 = ['1', '4', '2', '7', '5']

var result = every(evArray1, isBelowThreshold1)

// CASE 1 returns true for the array ['1', '4', '2', '7', '5']
// tested by the provided function currentValue < 5

var isBelowThreshold2 = (currentValue) => currentValue < 10;

var evArray2 = ['1', '4', '2', '7', '5']

var result = every(evArray2, isBelowThreshold2)