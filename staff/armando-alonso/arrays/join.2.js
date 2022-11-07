function join(array, separator = ',') {

    var cadena = ''

    for (let j = 0; j < array.length; j++) {

        if (array[j] === undefined) {
            array[j] = ''
        }
    }

    for (let i = 0; i < array.length; i++) {

        if (i + 1 === array.length) {
            cadena += array[i];

            return cadena    
        } 

        cadena += array[i] + separator;
        
    }
}