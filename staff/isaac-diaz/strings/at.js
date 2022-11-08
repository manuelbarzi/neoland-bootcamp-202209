

function at(string, index = 0) {
    if(typeof string !== 'string') throw new TypeError(string + 'is not a string')

    if(typeof index !== 'number') {
        index = string[0]
        return index
    }

    if(index < 0) {
        index = string.length + index
        return string[index]
    }
    return string[index]
}