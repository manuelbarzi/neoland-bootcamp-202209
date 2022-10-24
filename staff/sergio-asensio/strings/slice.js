function slice(string, start, end) {
    var result = ''


    if (start < 0){
        start = start + string.length
    }

    if (end < 0){
        end = end + string.length
    }

    if (end === undefined){
        end = string.length
    }

    start = Math.trunc(start)
    end = Math.trunc(end)

    
    for (i = start; i < end ; i++) {
        result = result + string[i]
    }
    
    return result
}