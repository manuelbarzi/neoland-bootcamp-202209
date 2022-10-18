function reduce(array, callback, initialValue = 0) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is no a function')
    
    var result = 0;

    for (var i = 0; i < numbers.length; i++){
     var element = array[i]
     
     if (initialValue === 0){
          i + 1
          initialValue + 1

          result = array[i]

     }
        
    var returnCallbackValue = callback(result, element)
    result = returnCallbackValue
    }
    return result
   
}