function indexOf(array, searchElement, fromIndex){
    var result = ""

    if (fromIndex === undefined){
        fromIndex = 0
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