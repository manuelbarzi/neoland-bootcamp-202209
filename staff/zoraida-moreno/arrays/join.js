function join(array, separator = ',') {
    var result = '';
  
    for (var i = 0; i < array.length; i++) {
      var element = array[i];
  
      // result += element + separator; es lo mismo que en la linea 11
  
    //   if (i + 1 < array.length) version de Xavi
      if (i < array.length -1) { //version de manu de la linea de arriba 
        result += element + separator;
      } else {
        result += element;
        // result = result + element (es lo mismo que la linea de arriba)
      }
    }
  
    return result;
  }