const elements = ['Fire', 'Air', 'Water'];

var res = join(elements)
console.assert(res === 'Fire,Air,Water');

var separador = ''
var result2 = join(elements, '')
console.assert(result2 === 'FireAirWater');

var separator3 = '-'
var result3 = join(elements, separator3)
console.assert(result3 === 'Fire-Air-Water');