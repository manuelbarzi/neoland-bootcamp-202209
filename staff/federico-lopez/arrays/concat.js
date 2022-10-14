function concat() {
  var result = [];

  for (var i = 0; i < arguments.length; i++) {
    var array = arguments[i];

    for (var j = 0; j < array.length; j++) {
      var element = array[j];

      result[result.length] = element;
    }
  }

  //   for (var i = 0; i < arguments.length; i++)
  //     for (var j = 0; j < arguments[i].length; j++)
  //       result[result.length] = arguments[i][j];

  return result;
}
