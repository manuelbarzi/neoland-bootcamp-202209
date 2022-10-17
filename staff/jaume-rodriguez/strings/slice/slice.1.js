function slice(string, index){
    var result = ""

    for (i = index; i < string.length; i++){
        result += string[i]
    }

    return result
}