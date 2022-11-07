function at(array, value) {

    if (value < 0) {
    value = array.length + value;
  }
  
  var result = array[value];
  
  return result;
}