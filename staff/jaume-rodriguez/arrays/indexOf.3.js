function indexOf(array, value, indexStart){
    var result = ""

    if (indexStart === undefined){
        indexStart = 0
    }

    for (var i = indexStart; i < array.length; i++){
        if (value === array[i]){
            result = i
            break;
        }
    }

    if (result === ""){
        result = -1
    }
return result
}