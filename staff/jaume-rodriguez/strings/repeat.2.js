function repeat(string, count){
    var result = ""

    if (count < 0) return new RangeError ("Invalid count  value: " + count);

    for (i = 0; i < count ; i++){
        result += string    //-> result = result + string count times
    }

    return result
}