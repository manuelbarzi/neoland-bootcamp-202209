var res = ''

function at(array, index) {


    if (index > array.length) {
        res = undefined
    }

    if (index < 0) {
        index = array.length + index
    }


    res = array[index]
    return res
}
