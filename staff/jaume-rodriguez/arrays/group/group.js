function group(array, callback) {
    const organizedArray = []

    for (let i = 0; i < array.length; i++) {
        organizedArray[organizedArray.length] = array[i]
    }
    return organizedArray
}