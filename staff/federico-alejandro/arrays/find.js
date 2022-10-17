function find(array, callback) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
 
    for (var i = 0; i < array.length; i++) {
        var element = array[i]

       var returnCallbackValue = callback(element)

        if(returnCallbackValue)
            return element


         }
    return undefined;
}