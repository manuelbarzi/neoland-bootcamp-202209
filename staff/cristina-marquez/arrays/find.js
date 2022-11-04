function findArray(array, callback) {

    for (var i = 0; i < array.length; i++) {
        var element = array[i];

        const matchesCondition = callback(element)

        if (matchesCondition) {
            return element
        }
    }

    //this is optioal, undefined is implicit when a function doesnt return something else
    return undefined
}

