function slice(string, start, end = 0) {

    var result = ''

    if (end === ''){
        end = string.length
    }

    for (i = start; i < end ; i++) {
        result = result + string[i]


    }
        
    return result

}