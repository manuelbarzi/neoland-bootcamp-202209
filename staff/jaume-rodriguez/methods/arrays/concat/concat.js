function concat(){
    var result = []

    for( var i = 0; i < arguments.length; i++) {
        if(arguments[i] instanceof Array) {
            for (var j = 0; j < arguments[i].length; j++){  //-> arguments[i].length = result.length
                result[result.length] = arguments[i][j]
            }
        } else {
            result[result.length] = arguments[i]
        }
    }

    return result
}