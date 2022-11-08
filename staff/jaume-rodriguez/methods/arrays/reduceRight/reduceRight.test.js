// CASE 1 returns 10 for the array ['a', 'l', 'o', 'h']
// as the result of the conditionated callback function

var reRiArray1 = ['a', 'l', 'o', 'h'];

var reRiCondition1 = (acomulado, element) => { return acomulado + element }

var result = reduceRight(reRiArray1, reRiCondition1)

// CASE 1.2 returns [4, 5, 2, 3, 0, 1] for the array [[0, 1], [2, 3], [4, 5]]
// as the result of the conditionated callback function

var reRiArray2 = [[0, 1], [2, 3], [4, 5]];

var reRiCondition2 = (acomulado, element) => {
    return acomulado.concat(element)
}

var result = reduceRight(reRiArray2, reRiCondition2)