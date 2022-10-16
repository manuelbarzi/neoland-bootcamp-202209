function sliceString(stringToSlice, startIndex, endIndex) {

    var output = ''

    if (startIndex && endIndex === undefined) {
        // Using only start index
        for (let i = startIndex; i < stringToSlice.length; i++) {
            const element = stringToSlice[i];
            output = output + element
        }
    } else if (startIndex && endIndex) {
        // Using start and end index
        for (let i = startIndex; i <= endIndex; i++) {
            const element = stringToSlice[i];
            output = output + element
        }
    } else {
        console.error('sliceString function was called with wrong parameters')
    }

    return output

}