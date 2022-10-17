function concat(){
    var result= []
    for (var i = 0; i < arguments.length; i++){
        var array = arguments[i]

        for ( var j = 0; j < array.length; j++){
          var  element = arguments[i][j]
            result[result.length] = element
        }
    }

    return result
}