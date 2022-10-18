function flat(array) {
    var result = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (!(element instanceof Array)) {
            result[result.length] = element;
        } else {
            const flatenedSubArray = flat(element);

            for (let j = 0; j < flatenedSubArray.length; j++) {
                result[result.length] = flatenedSubArray[j]
            }
        }
    }
    return result;
}