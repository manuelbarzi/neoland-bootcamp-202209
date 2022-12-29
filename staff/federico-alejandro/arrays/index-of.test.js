const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

//on element found
var result1 = indexOf(beasts, 'bison');
console.assert(result1 === 1);

//on not element found
var result2 = indexOf(beasts, 'giraffe');
console.assert(result2 === -1);

// positive fromIndex version
var result3 = indexOf(beasts, 'bison', 2);
console.assert(result3 === 4);

//negative fromIndex
var result4 = indexOf(beasts, 'bison', -3);
console.assert(result4 === 4);