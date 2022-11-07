function push(array) {

    var elementsToAdd = arguments.length - 1
    
    for (var i = 0; i < elementsToAdd; i++) {
        array[array.length] = arguments[i + 1]
    }

    // for (var i = 1; i < arguments.length; i ++) {
    //     array[array.length] = arguments[i]
    // }

    return array.length

}






// function push() {

//     for(var i = 0; i < arguments.length; i++){
//         animals[animals.length] = arguments
//     }
//     return animals.length




// }