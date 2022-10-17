

function myIndexOf(string, worth, startPosition) {

    startPosition < 0 ? startPosition = 0 : startPosition

    !startPosition ? startPosition = 0 : startPosition

    if (!worth) {
        if (!startPosition)
            return 0

        else if (startPosition > string.length)
            return string.length

        else return startPosition
    }



    for (i = startPosition; i < string.length; i++) {

        var search = string.substring(i, (i + worth.length))

        if (search === worth)
            return i

    }

    return -1
}

