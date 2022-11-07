function myConcat() {
    var result = []
    for (var i = 0; i < arguments.length; i++) {
        var string = arguments[i]

        
        result += string 
    }    
    return result
}
