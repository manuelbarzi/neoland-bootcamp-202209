// Case devuelve true porque cumple la condición

{

    const array1 = [1, 30, 39, 29, 10, 13];

    const check = function(n){
        return n < 40
    }

    let result = array1.every(check)


    console.assert(result === true)
}


// Case devuelve false porque no cumple la condicion

{

    const array1 = [1, 30, 39, 29, 10, 13];

    const check = function(n){
        return n < 39
    }

    let result = array1.every(check)


    console.assert(result === false)
}