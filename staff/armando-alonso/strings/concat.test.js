// FIRST VERSION

// Case if we have two strings

var word1 = 'Curso';
var word2 = 'Neoland';

var testConcat = concat(word1, word2)

console.assert(testConcat === 'CursoNeoland')

// Case if first variable is an empty string

var word1 = '';
var word2 = 'Neoland';

var testConcat = concat(word1, word2)

console.assert(testConcat === 'Neoland')

// Case if second variable is an empty string

var word1 = 'Curso';
var word2 = '';

var testConcat = concat(word1, word2)

console.assert(testConcat === 'Curso')


// Case if both variables are empty string

var word1 = '';
var word2 = '';

var testConcat = concat(word1, word2)

console.assert(testConcat === '')


//Case first varibale is a number

var word1 = 1;
var word2 = 'Neoland';

var testConcat = concat(word1, word2)

console.assert(testConcat === '1Neoland')


//Case second variable is a number

var word1 = 'Curso'
var word2 = 1;

var testConcat = concat(word1, word2)

console.assert(testConcat === 'Curso1')


// VERSION 2

//Case both variables are a number

var word1 = 1;
var word2 = 1;

var testConcat = concat(word1, word2)

console.assert(testConcat === '11')

// Case First variable is undefined

var newword ;
var newword2 = 'Neoland';

var testConcat = concat(newword, newword2)

console.assert(testConcat === 'undefinedNeoland')

// Case second variable is undefined

var newword1 = 'Curso';
var newword3 ;

var testConcat = concat(newword, newword2)

console.assert(testConcat === 'undefinedNeoland')


// // Case both variables are undefined

// var newwordd1 
// var newwordd2

// var testConcat = concat(newwordd1, newwordd2)

// console.assert(testConcat === NaN)
