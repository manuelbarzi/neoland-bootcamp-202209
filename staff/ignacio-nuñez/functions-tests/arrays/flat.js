function flat(array, number = 1) {
    var result1 = []
    var result2 = array

    var arrayPosition = 0

    forNumber:
    for (var k = 0; k < number; k += 2) {

        arrayPosition = 0
        for (var i = 0; i < result2.length; i++) {

            if (result2[i] instanceof Array) {
                for (j = 0; j < result2[i].length; j++) {
                    result1[arrayPosition] = result2[i][j]
                    arrayPosition++
                }
            } else {
                result1[arrayPosition] = result2[i]
                arrayPosition++
            }
        }
        arrayPosition = 0
        for (var i = 0; i < result1.length; i++) {

            if (result1[i] instanceof Array) {
                for (j = 0; j < result1[i].length; j++) {
                    result2[arrayPosition] = result1[i][j]
                    arrayPosition++
                }
            } else {
                result2[arrayPosition] = result1[i]
                arrayPosition++
            }
        }
        for (i = 0; i < result2.length; i++) {
            if (result2[i] instanceof Array)
                continue forNumber
        }
        number % 2 === 0 ? finalResult = result2 : finalResult = result1
        return finalResult
    }
    number % 2 === 0 ? finalResult = result2 : finalResult = result1
    return finalResult
}

