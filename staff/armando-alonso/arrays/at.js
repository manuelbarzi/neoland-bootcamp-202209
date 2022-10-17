function at(array, index) {

    if (index < 0) {
        pos = array.length

        pos1 = pos + index 

        return array[pos1]

    }

    for (var i = 0; i < array.length; i++) {
        var pos = array[i]
        if (i === index) {
            return pos
        };
        
    }
    
}