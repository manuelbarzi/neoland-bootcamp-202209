// Case we add up the numbers

{

    const array1 = [20, 50, 30, 25, 25]

    var result = 0

    var call = function(n){
        result += n
    }

    forEach(array1,call)

    console.assert(result === 150)

}


// Case we multiply the numbers

{

    const array1 = [20, 50, 30, 25, 25]

    var result = []

    var call = function(n,i){
        result[i] =  n * 10
    }

    forEach(array1,call)

    console.assert(result[0] === 200)
    console.assert(result[1] === 500)
    console.assert(result[2] === 300)
    console.assert(result[3] === 250)
    console.assert(result[4] === 250)

}

// Case we multiply the numbers

{

    const array1 = ['N', 'e', 'o', 'l', 'a', 'n', 'd']

    var result = ''

    var call = function(n){
        result += n
    }

    forEach(array1,call)

    console.assert(result === 'Neoland')

}