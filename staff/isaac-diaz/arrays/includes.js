function includes(array, searchElement, fromIndex) {


    if (array.length <= fromIndex)
        return false


        // if (searchElement === undefined)
        //     return false;

        for (var i = 0; i < array.length; i++) {
        var element = array[i]

        if (searchElement === element)
            return true;
    }
    return false
}

