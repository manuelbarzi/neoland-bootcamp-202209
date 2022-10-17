function push(array){

    for (var i = 0; i < arguments.length - 1; i++) {
        array[array.length] = arguments[i+1]
    }
    return array.length
}