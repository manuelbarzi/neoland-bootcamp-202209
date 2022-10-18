//Case  for positive numbers

var sentence = 'This is a test sentence';

var index = 10;

var result = at(sentence, index)

console.assert(result === 't')


//Case  for positive superior numbers

var sentence = 'This is a test sentence';

var index = 100;

var result = at(sentence, index)

console.assert(result === undefined)


//Case  for negative numbers

var sentence = 'This is a test sentence';

var index = -4;

var result = at(sentence, index)

console.assert(result === 'e')


//Case  for negative superior  numbers

var sentence = 'This is a test sentence';

var index = -30;

var result = at(sentence, index)

console.assert(result === undefined)


//Case 1 for no string value (bolean)

var sentence = true;

var index = -30;

try {

var result = at(sentence, index)
}catch(error) {
    result = error
}
console.assert(result instanceof Error)
console.assert(result.message === 'Please, the sentence should be an string')


//Case 2 for no string value (number)

var sentence = 6;

var index = -30;

try {

var result = at(sentence, index)
}catch(error) {
    result = error
}
console.assert(result instanceof Error)
console.assert(result.message === 'Please, the sentence should be an string')


//Case 2 for no string value (null)

var sentence = null;

var index = -30;

try {

var result = at(sentence, index)
}catch(error) {
    result = error
}
console.assert(result instanceof Error)
console.assert(result.message === 'Please, the sentence should be an string')


//Case 1 for no number index value (bolean)

var sentence = 'This is a test sentence';

var index = true;

try {

var result = at(sentence, index)
}catch(error) {
    result = error
}
console.assert(result instanceof Error)
console.assert(result.message === 'Please, the index should be a number')


//Case 2 for no number value (string)

var sentence = 'This is a test sentence';

var index = 'string';

try {

var result = at(sentence, index)
}catch(error) {
    result = error
}
console.assert(result instanceof Error)
console.assert(result.message === 'Please, the index should be a number')


//Case 2 for no number value (null)

var sentence = 'This is a test sentence';

var index = null;

try {

var result = at(sentence, index)
}catch(error) {
    result = error
}
console.assert(result instanceof Error)
console.assert(result.message === 'Please, the index should be a number')

