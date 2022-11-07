function join(array, separator = ',') {
    result = ''

    if (separator === '') {
        separator = ''
    }
    for (i = 0; i < array.length; i++)
        if (i < array.length - 1)
            result = result + array[i] + separator
        else {
            result = result + array[i]
        }

    return result



}