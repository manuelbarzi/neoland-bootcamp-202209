function includes(array, searchElement, index){
    var result = false

    if (index < 0){
        index += array.length
    }

    if (index >= array.length){
        return result
    }

    if(index === undefined || index <= 0){
        for (var i = 0; i < array.length; i++){
            if (searchElement === array[i]){
                result = true
                return result
            }
        }
    }

    if (searchElement === array[index]){
        result = true
        return result
    }
    return result
}