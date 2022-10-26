// CASE creates an object from an array of nums

var a = [10, 20, 30]

var o = a.toObject()
// { 0: 10, 1: 20, 2: 30, length: 3 }

console.assert(o instanceof Object && !(o instanceof Array))
console.assert(o[0] === 10)
console.assert(o[1] === 20)
console.assert(o[2] === 30)
console.assert(o.length === 3)

console.assert(a instanceof Array)
console.assert(a[0] === 10)
console.assert(a[1] === 20)
console.assert(a[2] === 30)
console.assert(a.length === 3)

// CASE creates an object from an array of chars

var n = ['a', 'b', 'c']

var o = n.toObject()
// { 0: 'a', 1: 'b', 2: 'c', length: 3 }

console.assert(o instanceof Object && !(o instanceof Array))
console.assert(o[0] === 'a')
console.assert(o[1] === 'b')
console.assert(o[2] === 'c')
console.assert(o.length === 3)

console.assert(n instanceof Array)
console.assert(n[0] === 'a')
console.assert(n[1] === 'b')
console.assert(n[2] === 'c')
console.assert(n.length === 3)
