// join(array,separator)

//CASE by default the 3 elements of the array get separate as a string by default with comas ','
var array = ['Fire', 'Air', 'Water'];

var separator = ','

var result = join(array, separator)

console.assert(result === "Fire,Air,Water");

//CASE by default the 3 elements of the array get separate as a string by nothing ''
var array = ['Fire', 'Air', 'Water'];

var separator = '';

var result = join(array, separator);

console.assert(result === "FireAirWater");

//CASE by default the 3 elements of the array get separate as string by dash '-'.

var array = ['Fire', 'Air', 'Water'];

var separator = "-";

var result = join(array, separator);

console.assert(result === "Fire-Air-Water");

//CASE by default the 3 elements of the array get separate as string by default by comas.

var array = ['Fire', 'Air', 'Water'];

var result = join(array);

console.assert(result === "Fire,Air,Water");