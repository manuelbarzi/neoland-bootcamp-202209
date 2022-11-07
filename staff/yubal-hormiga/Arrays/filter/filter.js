
function filter(array, callback, index = 0){
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    var result = []

    for( var i = index; i < array.length; i ++){
        var element = array[i]
        var returnCallback =  callback(element)
        if(returnCallback){
            result[result.length] = element
        }
    }
    return result
}