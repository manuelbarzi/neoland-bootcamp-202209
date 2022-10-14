function join(array, separator = ",") {
    var result = "";
  
    for (var i = 0; i < array.length; i++) {
      var element = array[i];
  
      result += element + separator;
  
      if (i + 1 !== array.length) {
        result += element + separator;
      } else {
        result += element;
      }
    }
  
    return result;
  }