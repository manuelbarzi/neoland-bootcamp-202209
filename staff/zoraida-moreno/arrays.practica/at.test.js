 // CASE returns 40 for array [10, 20, 30, 40, 50] at index 3

var a = [10, 20, 30, 40, 50]

var res = at(a, 3)

console.assert(res === 40)// (res === 40) devuelve un booleano (true o false) 

// CASE returns 7 for array [10, 20, 30, 40, 50] at index 7

var a = [10, 20, 30, 40, 50]

var res = at(a, 7) 

console.assert(res === undefined)

// CASE returns undefined for array [10, 20, 30, 40, 50] at index -70

var a = [10, 20, 30, 40, 50]

var res = at(a, -70)

console.assert(res === undefined)

// CASE returns 30 for array [10, 20, 30, 40, 50] at index -3

var a = [10, 20, 30, 40, 50]

var res = at(a, -3)

console.assert(res === 30)

// CASE returns 10 for array [10, 20, 30, 40, 50] with no index given

var a = [10, 20, 30, 40, 50]

var res = at(a)

console.assert(res === 10)
