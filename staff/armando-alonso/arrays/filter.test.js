// Case compara y devuelve las premisas válidas

{

    const array1 = [1, 30, 39, 29, 10, 13];

    const check = function(n){
        if (n < 30) return true
    }

    let result = array1.filter(check)


    console.assert(result[0] === 1)
    console.assert(result[1] === 29)
    console.assert(result[2] === 10)
    console.assert(result[3] === 13)

}


// Case comprueba y devuelve las premisas validas.

{

    const array1 = ['hola', 'neoland', 'teclado', 'hoja', 'pantalla', 'webcam'];

    const check = function(n){
        if(n.length < 5) return true
    }

    let result = array1.filter(check)


    console.assert(result[0] === 'hola')
    console.assert(result[1] === 'hoja')
}