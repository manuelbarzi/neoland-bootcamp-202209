function push(arrayPush, elementToPush){
    for (var i = 1; i < arguments.length; i++) {
        var array = arguments[i]
     
        arrayPush[arrayPush.length] = arguments[i]
    }
}