// CASE: if fromIndex is 2 the searchElemnt of 'bison' has to be 4

var array = ['ant', 'bison', 'camel', 'duck', 'bison', 'duck'];
var searchElement = 'duck';
var fromIndex = 2;

var result = indexOf(array, searchElement, fromIndex);

console.assert(result === 3);

// CASE: if fromIndex is 0 the searchElemnt of 'bison' has to be 1

var array = ['ant', 'bison', 'camel', 'duck', 'bison', 'duck'];
var searchElement = 'duck';
var fromIndex = 0;

var result = indexOf(array, searchElement, fromIndex);

console.assert(result === 3);

// CASE: if fromIndex is -3 the searchElemnt of 'bison' has to be 4

var array = ['ant', 'bison', 'camel', 'duck', 'bison', 'duck'];
var searchElement = 'bison';
var fromIndex = -3 ;

var result = indexOf(array, searchElement, fromIndex);

console.assert(result === 4);

// CASE: if searchElemnt doesn't exist the result is -1

var array = ['ant', 'bison', 'camel', 'duck', 'bison', 'duck'];
var searchElement = 'giraffe';
var fromIndex = 1 ;

var result = indexOf(array, searchElement, fromIndex);

console.assert(result === -1);