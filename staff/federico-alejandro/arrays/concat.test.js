var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

var array3 = concat(array1, array2)

console.assert(array1.length === 3);
console.assert(array2.length === 3);

console.assert(array3.length === 6);
console.assert(array3[0] === array1[0]);
console.assert(array3[1] === array1[1]);
console.assert(array3[2] === array1[2]);
console.assert(array3[3] === array2[0]);
console.assert(array3[4] === array2[1]);
console.assert(array3[5] === array2[2]);

var arrays4 = ['a', null, 1];
var arrays5 = [ 'j', 18];
var arrays6 = [true];
var arrays7 = [false, 'hola mundo'];

var array8 = concat(arrays4, arrays5, arrays6, arrays7);

console.assert(array8.length === 8);
console.assert(array8[0] === array4[0]);
console.assert(array8[1] === array4[1]);
console.assert(array8[2] === array4[2]);
console.assert(array8[3] === array5[0]);
console.assert(array8[4] === array5[1]);
console.assert(array8[5] === array6[0]);
console.assert(array8[6] === array7[0]);
console.assert(array8[7] === array7[1]);



