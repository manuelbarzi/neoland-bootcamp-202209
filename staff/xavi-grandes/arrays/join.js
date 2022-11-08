function join(array, separator = ',') {
  var result = '';

  for (var i = 0; i < array.length; i++) {
    var element = array[i];

    //if (i + 1 < array.length ) {
    if (i < array.length - 1) {
      result += element + separator;
    } else {
      result = result + element;
    }
  }

  return result;
}
