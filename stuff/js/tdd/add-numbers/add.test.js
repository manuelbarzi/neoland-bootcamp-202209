// CASE succceds on  a=1 and b=2 (happy path)

var r = add(1, 2)

console.assert(r === 3)

// CASE fails on a=1 and b='hola mundo' (unhappy path)

var r = add(1, 'hola mundo')

console.assert(r instanceof Error)
console.assert(r.message === 'b is not a number')

// CASE fails on a='hola mundo' b=2 (unhappy path)

var r = add('hola mundo', 2)

console.assert(r instanceof Error)
console.assert(r.message === 'a is not a number')

// CASE fails on a='hola' and b='mundo' (unhappy path)

var r = add('hola', 'mundo')

console.assert(r instanceof Error)
console.assert(r.message === 'a is not a number')

// CASE fails on a=true and b='mundo' (unhappy path)

var r = add(true, 'mundo')

console.assert(r instanceof Error)
console.assert(r.message === 'a is not a number')

// CASE fails on a=1 and b=false (unhappy path)

var r = add(1, false)

console.assert(r instanceof Error)
console.assert(r.message === 'b is not a number')
