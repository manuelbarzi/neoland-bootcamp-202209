

//CASE a.concat(b)

var res = a.concat(b)

console.assert("hola mundohellow world")

//CASE a.concat(b, c)

var res = a.concat(b, c)

console.assert("hola mundohellow worldhw")

//CASE a.concat(aA)

var res = a.concat(aA)

console.assert("hola mundo1")

//CASE a.concat(aA, bB)

var res = a.concat(aA, bB)

console.assert("hola mundo12")

//CASE a.concat(a, bB)

var res = aA.concat(a, bB)

console.assert("error")

//CASE arA.concat(arB, arC)

var res = arA.concat(arB, arC)

console.assert("'A', 'B', 'C', 1, 2, 3, 1, 'B', 'C'")


//CASE arA.concat(a, arC)

var res = arA.concat(a, arC)

console.assert('A', 'B', 'C', 'hola mundo', 1, 'B', 'C')

//CASE a.concat(arC)

var res = a.concat(arC)

console.assert('hola mundo1,B,C')