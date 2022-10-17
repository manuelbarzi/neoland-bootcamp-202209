function indexOf(array, searchElement, fromIndex = 0) {
    if (fromIndex < 0) {
        fromIndex = array.length + fromIndex;

        if (fromIndex < 0) {
            fromIndex = 0;
        }
    }

    for (var i = fromIndex; i < array.length; i++) {
        if (array[i] === searchElement) {
            return i;
        }
    }

    return -1;


}