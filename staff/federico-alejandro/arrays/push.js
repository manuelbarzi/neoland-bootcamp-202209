function push(array, ) { //element agrego?
    // empieza desde la posicion 1 porque la 0 esta coupada por todo el primer array
    for (var i = 1; i < arguments.length; i++) {
        array[array.length] = arguments[i]
    }

    return array.length

    /*array[array.length] = Element

     return array.length*/
}


