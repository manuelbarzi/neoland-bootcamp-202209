function concat(array1, array2) {
  var test = array1.length + array2.length;

  var newarray = [""];

  newarray.length = test;

  for (var i = 0; i < test; i++) {
    var element = array1[i];

    newarray[i] = element;

    if (array1.length - 1 === i) {
      for (var z = 0; z < array2.length; z++) {
        var element = array2[z];

        newarray[i + 1 + z] = element;
      }
      return newarray;
    }
  }
}

  // forma buena de Fede

//   var result = [];

//   for (var i = 0; i < array1.length; i++) {
//     var element = array1[i];

//     result[result.length] = element;
//   }

//   for (var i = 0; i < array2.length; i++) {
//     var element = array2[i];

//     result[result.length] = element;
//   }
// }
