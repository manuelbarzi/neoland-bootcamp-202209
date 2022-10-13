var a = "hola mundo"
var b = "hellow world"
var c = "hw"

var aA = 1
var bB = 2
var cC = 3

var arA = ["A", "B", "C"]
var arB = [1, 2, 3]
var arC = [1, "B", "C"]

var d


//CASE a.concat(b)
debugger
var res = concat(a, b)

console.assert(res === "hola mundohellow world")

//CASE a.concat(b, c)

var res = concat(a, b, c)

console.assert(res === "hola mundohellow worldhw")

//CASE a.concat(b, c, a, b)

var res = concat(a, b, c, a, b)

console.assert(res === "hola mundohellow worldhwhola mundohellow world")

//CASE a.concat(aA)

var res = concat(a, aA)

console.assert(res === "hola mundo1")

//CASE a.concat(aA, bB)

var res = concat(a, aA, bB)

console.assert(res === "hola mundo12")

//CASE aA.concat(a, bB, b)

var res = concat(aA, a, bB, b)

console.assert(res === "error")

//CASE aA.concat(d, bB, b)

var res = concat(aA, d, bB, b)

console.assert(res === "error")

//CASE arA.concat(arB, arC)

var res = concat(arA, arB, arC)

console.assert(res === "'A', 'B', 'C', 1, 2, 3, 1, 'B', 'C'")

//CASE arA.concat(a, arC)

var res = concat(arA, a, arC)

console.assert(res === 'A', 'B', 'C', 'hola mundo', 1, 'B', 'C')

//CASE a.concat(arC)

var res = concat(a, arC)

console.assert(res === 'hola mundo1,B,C')