// Case index of a number 

{

    const array1 = [30, 39, 29, 10, 1, 13]

    const check = function(n) {
        if (n < 20) return true
    }

    let result = array1.findIndex(check)

    console.assert(result === 3)

}


// Case index of a number 

{

    const array1 = [30, 39, 29, 10, 1, 13]

    const check = function(n) {
        if (n < 0) return true
    }

    let result = array1.findIndex(check)

    console.assert(result === -1)

}
