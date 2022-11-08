function every(array, callback){
    for (var i = 0; i < array.length; i++){
        var element = array[i]
        if (!callback(element)){
            return false
        }
    }
    return true
}

/* ---- */

/* function every(array, callback){
    for (var i = 0; i < array.length; i++){
        var element = array[i]
        if (!callback(element, i, array)){
            return false
        }
    }
    return true
} */