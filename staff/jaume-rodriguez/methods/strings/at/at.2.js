function at(string, index){
    if (index < 0)
    index = string.length + index
    
    return string[index]
}