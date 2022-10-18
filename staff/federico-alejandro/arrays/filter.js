function filter(array, callback) {
    debugger
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    const result = [];

    //let position = 0
    
    for (var i = 0; i < array.length; i++) {
        const element = array[i];

        const meetsTheCondition = callback(element)
        //result[i] = returnCallbackValue
        if (meetsTheCondition) {
            
            result[result.length] = element
            //position++
        }      
    }

    return result
}