//CASE only with index start
{
    var string = 'Hola mundo loco'
    var start = 5
    var end

    var result = slice(string, start, end)

    console.assert(result === 'mundo loco')
}

    // CASE with a negative index start
{
        var string = 'Hola mundo loco'
        var start = -2
        var end 
    
        var result = slice(string, start, end)
    
        console.assert(result === 'co')
}

// CASE a string with positives numbers
{
    var string = 'Hola mundo loco'
    var start = 0
    var end = 4

    var result = slice(string, start, end)

    console.assert(result === 'Hola')
}

// CASE a string with positives numbers
{
    var string = 'Hola mundo loco'
    var start = 5
    var end = 10

    var result = slice(string, start, end)

    console.assert(result === 'mundo')
}

// CASE a string with decimal numbers
{
    var string = 'Hola mundo loco'
    var start = 5.7
    var end = 10.99

    var result = slice(string, start, end)

    console.assert(result === 'mundo')
} 

// CASE a string with decimal numbers
{
    var string = 'Hola mundo loco'
    var start = -8
    var end = -2

    var result = slice(string, start, end)

    console.assert(result === 'ndo lo')
}

// CASE a string with the same index in start and end
{
    var string = 'Hola mundo loco'
    var start = -5
    var end = -5

    var result = slice(string, start, end)

    console.assert(result === '')
}

// CASE a string with the same index in start and end
{
    var string = 'Hola mundo loco'
    var start = -4
    var end = 2

    var result = slice(string, start, end)

    console.assert(result === '')
}


