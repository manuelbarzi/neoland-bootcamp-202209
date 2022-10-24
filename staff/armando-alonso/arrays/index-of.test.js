// Case value is a positive number

{

    const beasts = ['ant', 'bison', 'camel', 'duck', 'bison', 'camel']

    let result = indexOf(beasts, 'camel')

    console.assert(result === 2)
    
}


// Case value is a second position

{

    const beasts = ['ant', 'bison', 'camel', 'duck', 'bison', 'camel']

    let result = indexOf(beasts, 'camel', 2)

    console.assert(result === 5)
    
}


// Case value is a different word

{

    const beasts = ['ant', 'bison', 'camel', 'duck', 'bison', 'camel']

    let result = indexOf(beasts, 'lion')

    console.assert(result === -1)
    
}


// Case value is a number

{

    const beasts = [2, 9, 9, 54, 3, 76]

    let result = indexOf(beasts, 54)

    console.assert(result === 3)
    
}


// Case value is an error

{

    const beasts = [2, 9, 9, 54, 3, 76]

    let result = indexOf(beasts, 35)

    console.assert(result === -1)
    
}


// Case we search the secon value

{

    const beasts = [2, 9, 9, 54, 3, 76, 54]

    let result = indexOf(beasts, 54, 2)

    console.assert(result === 6)
    
}