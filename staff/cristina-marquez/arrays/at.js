function at(array, index) {

    if (index < 0)
        index = [array.length + index]


    if (index === undefined)
        index = 0

    var result = array[index]

    return result
}

