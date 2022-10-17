function map(array, callback) {
    var result = [];
  
    for (var i = 0; i < array.length; i++) {
      var element = array[i];
  
      var returnCallbackValue = callback(element);
  
      result[result.length] = returnCallbackValue;
    }
  
    return result;
  }