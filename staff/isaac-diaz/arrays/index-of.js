function indexof(numbers, element, fromIndex = 0) {
    // if (fromIndex === undefined){
    //     fromIndex = 0
    // }
    if (fromIndex < 0) {
        fromIndex = array.length + fromIndex

        if (fromIndex < 0) {
            fromIndex = 0;
        }
    }
    for (var i = fromIndex; i < numbers.length; i++) {

        if (numbers[i] === element)
            return i;
    }

    return -1;
}

// [55, 45, 71, 92, 12, 33]