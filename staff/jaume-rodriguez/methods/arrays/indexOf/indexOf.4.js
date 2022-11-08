function indexOf(array, searchElement, fromIndex){
    var result = ""

    if (fromIndex === undefined){
        fromIndex = 0
    }

    if (fromIndex < 0){
        fromIndex = fromIndex + array.length
    }

    for (var i = fromIndex; i < array.length; i++){
        if (searchElement === array[i]){
            result = i
            break;
        }
    }

    if (result === ""){
        result = -1
    }
return result
}