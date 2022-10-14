function push(array) {
    debugger
    var argumentsLength = arguments.length - 1
    
    for (var i = 0; i < argumentsLength; i++) {
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
