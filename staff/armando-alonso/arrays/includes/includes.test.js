// Case value is a number

{

    const array = [4, 5, 9, 20, 43, 64]

    let result = includes(array, 5)

    console.assert(result === true)


}

// Case value is a negative number

{

    const array = [4, 5, 9, 20, 43, 64]

    let result = includes(array, -5)

    console.assert(result === false)


}


// Case value is a string

{

    const array = ['blue', 'red', 'yellow', 'black', 'white']

    let result = includes(array, 'black')

    console.assert(result === true)


}


// Case value is a number and formIndex is a number

{

    const array = [4, 5, 9, 20, 43, 64]

    let result = includes(array, 9, 1)

    console.assert(result === true)


}


// Case value is a number and formIndex is a string

{

    const array = [4, 5, 9, 20, 43, 64]

    let result = includes(array, 9, 'hola')

    console.assert(result === true)


}


// Case value is a string and check value is a character

{

    const array = 'Neoland'

    let result = includes(array, 'o')

    console.assert(result === true)


}


// Case value is a string and check value is a word

{

    const array = 'Neoland'

    let result = includes(array, 'Neoland')

    console.assert(result === true)


}


// Case value is a string and check value is a different word

{

    const array = 'Neoland'

    let result = includes(array, 'oland')

    console.assert(result === false)


}

