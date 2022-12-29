function map(array, callback) {
  if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
  if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
  
  var result = [];
  
    for (var i = 0; i < array.length; i++) {
      var element = array[i];
  
      var returnCallbackValue = callback(element, i, array);
  
      result[result.length] = returnCallbackValue;
    }
  
    return result;
  }

  /*function map(array, callback){
    res = []
  
    for(i = 0; i < array.length; i++){
      let returnedElement = callback(array[i], i, array)
  
      res[i] = returnedElement
  
    }
  
    return res
  }*/

