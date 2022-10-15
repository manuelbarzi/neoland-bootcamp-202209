function sliceParrafo(parrafo, startNumber, endNumber) {

    var result = ''

    if (endNumber < startNumber && endNumber > 0)
        return result

    if (startNumber < 0) {
        var absolute = startNumber * -1

        if (absolute > parrafo.length)
            startNumber = 0

        else startNumber += parrafo.length
    }

    if (endNumber < 0)
        endNumber += parrafo.length

    !endNumber || endNumber > parrafo.length === true ? endNumber = parrafo.length : endNumber



    for (i = startNumber; i < endNumber; i++) {
        result += parrafo[i]

    }

    return result
}