function concat(array1, array2, array3, array4, array5, array6) {
  var result = [];

  for (var i = 0; i < array1.length; i++) {
    result[result.length] = array1[i];
  }

  for (var i = 0; i < array2.length; i++) {
    result[result.length] = array2[i];
  }

  for (var i = 0; i < array3.length; i++) {
    result[result.length] = array3[i];
  }

  for (var i = 0; i < array4.length; i++) {
    result[result.length] = array4[i];
  }

  for (var i = 0; i < array5.length; i++) {
    result[result.length] = array5[i];
  }

  for (var i = 0; i < array6.length; i++) {
    result[result.length] = array6[i];
  }
  return result;
}
