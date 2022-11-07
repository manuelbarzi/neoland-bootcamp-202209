function indexOf(array, searchElement, fromIndex = 0) {

    if (fromIndex < 0) {
        var newFromIndex = array.length + fromIndex
        for (var i = newFromIndex; i < array.length; i++) {
            if (searchElement === array[i]) {
                return i;
            }
        }
    }

    if (fromIndex > 0) {
        for (var i = fromIndex; i < array.length; i++) {
            if (searchElement === array[i]) {
                return i;
            }
        }
    }

    for (var i = 0; i < array.length; i++) {
        if (searchElement === array[i]) {
            return i;
        }
    }

    return -1

}


