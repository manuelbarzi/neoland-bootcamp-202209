function join(array, separator = ',') {

    var cadena = ''

    for (let i = 0; i < array.length; i++) {
        if (i + 1 === array.length) {
            cadena += array[i];
            
        }else cadena += array[i] + separator;
    }
    return cadena
    
}