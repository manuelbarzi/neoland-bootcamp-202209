function push() {

    for (var i = 0; i < arguments.length; i++) {
        animals[animals.length] = arguments[i]
    }

    var cantidad = 0

    for (i = 0; i < arguments.length; i++) {

        var searchStrings = animals[animals.length - arguments.length +i]

        if(searchStrings === arguments[i])
            cantidad = cantidad + 1   
    }
    
    if ( cantidad !== arguments.length)
        return new Error('arguments didnt founded in the array')


    return animals.length

}






// function push() {

//     for(var i = 0; i < arguments.length; i++){
//         animals[animals.length] = arguments
//     }
//     return animals.length




// }
