function indexOf(string, worth, startPosition) {
    startPosition < 0 ? startPosition = 0 : startPosition

    startPosition === undefined ? startPosition = 0 : startPosition

    if (!worth) {
        if (!startPosition)
            return 0

        else if (startPosition > string.length)
            return string.length

        else return startPosition
    }
    for (var i = startPosition; i < string.length; i++) {

        var search = (function (string, indexFrom, indexEnd) {
            var comparationSearch = ''

            for (var j = indexFrom; j < indexEnd; j++) {
                comparationSearch = comparationSearch + string[j]
            }
            return comparationSearch
        }(string, i, (i + worth.length)))

        if (search === worth)
            return i
    }
    return -1
}