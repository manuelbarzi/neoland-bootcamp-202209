// CASE creates an object from an array of nums

{

    const a = [10, 20, 30]

    let o = a.toObject()
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

}


// CASE creates an object from an array of chars

{

    const n = ['a', 'b', 'c']

    // { 0: 'a', 1: 'b', 2: 'c', length: 3 }

    let o = a.toObject()

    console.assert(o instanceof Object && !(o instanceof Array))
    console.assert(o[0] === 10)
    console.assert(o[1] === 20)
    console.assert(o[2] === 30)
    console.assert(o.length === 3)

    console.assert(n instanceof Array)
    console.assert(n[0] === 10)
    console.assert(n[1] === 20)
    console.assert(n[2] === 30)
    console.assert(n.length === 3)

}