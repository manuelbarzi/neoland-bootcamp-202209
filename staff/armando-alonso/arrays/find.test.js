// Case happy pass 

{

    const array1 = [30, 39, 29, 10, 1, 13]

    const check = function(n) {
        if (n < 10) return true
    }

    let result = array1.find(check)

    console.assert(result === 1)

}


// Case undefined

{

    const array1 = [30, 39, 29, 10, 1, 13]

    const check = function(n) {
        if (n < 0) return true
    }

    let result = array1.find(check)

    console.assert(result === undefined)

}