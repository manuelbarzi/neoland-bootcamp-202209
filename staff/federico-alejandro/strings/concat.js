function myConcat() {
    var result = ""

    
// se utiliza para contatenar la totalidad del array
    for (var i = 0; i < arguments.length; i++) {
        var string = arguments[i]

        
        result += string // O result = result + string
    }
    
    return result
}

