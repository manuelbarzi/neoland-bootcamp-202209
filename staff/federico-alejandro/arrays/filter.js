function filter(array, callback) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    var result = [];
    var position = 0
    
    for (var i = 0; i < array.length; i++) {
        var element = array[i];

        var returnCallbackValue = callback(element)
        //result[i] = returnCallbackValue
        if (returnCallbackValue) {
            
            result[position] = element
            position++
        }      
    }
    return result
}