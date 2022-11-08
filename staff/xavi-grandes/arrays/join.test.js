// sintaxis join(separator)

// CASE 3 elements of the array get separated as a string by comas ','
var array = ['Fire', 'Air', 'Water'];
var separator = ','

var result = join(array, separator)

console.assert (result === 'Fire,Air,Water')

// CASE 3 elements of the array get separated as a string by nothing ''
var array = ['Fire', 'Air', 'Water'];
var separator = ''

var result = join(array, separator)

console.assert (result === 'FireAirWater')

// CASE 3 elements of the array get separated as a string by dash '-'
var array = ['Fire', 'Air', 'Water'];
var separator = '-'

var result = join(array, separator)

console.assert (result === 'Fire-Air-Water')

// CASE by default the 3 elements of the array get separated as a string by default with comas ','
var array = ['Fire', 'Air', 'Water']; 

var result = join(array)

console.assert (result === 'Fire,Air,Water')