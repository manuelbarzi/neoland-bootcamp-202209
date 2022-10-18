// arr.every(callback(element[, index[, array]])[, thisArg])

function every (arrayEvery, callback){

    var resultNewArray = []

    for (var i = 0; i < arrayEvery.length;i++){
        element = arrayEvery[i]

        var result = callback(element)

        if (result === true) {
            resultNewArray.push(element)
        }
    }
    return resultNewArray
}