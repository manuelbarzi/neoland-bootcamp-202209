function join(elements, separator = ',') {
  var result = '';

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i]
    
   
    if (i < elements.length -1) {
        result += element + separator;
    } else {
        result = result + element;
    }
  }
  return result;
}
