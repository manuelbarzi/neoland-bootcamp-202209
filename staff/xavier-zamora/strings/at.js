
function at(array, index) {
    debugger
    var result
    var j = array.length

    if (index < 0 && index * -1 < j) {
        var indexB = j - index * -1
        result = array[indexB]
    } else if (index > j) {
        result = console.log("error")
    } else {
        result = array[index]
    }
    return result
}
