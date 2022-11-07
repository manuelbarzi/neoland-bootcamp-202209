function push(array, element) {
    aux = 0
    if (element.length > 1) {
        aux = element.length
    }
    array[array.length] = element



    result = array.length + aux
    return result
}




// array = ['hola','mundo']
// (2) ['hola', 'mundo']
// elemento1 = 'loco'
// 'loco'
// elemento2 = 'crazy'
// 'crazy'
// array.push(elemento1, elemento2)
// 4
// array
// (4) ['hola', 'mundo', 'loco', 'crazy']


// if (typeof element ===){
// if (typeof thing1 === 'number')