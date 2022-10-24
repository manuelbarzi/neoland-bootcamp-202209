function concat(array1,array2) {


  const test = array1.length + array2.length;


  let newarray = [""];

  newarray.length = test;

  for (let i = 0; i < test; i++) {
    const element = array1[i];

    newarray[i] = element;

    if (array1.length - 1 === i) {
      for (let z = 0; z < array2.length; z++) {
        const element = array2[z];

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


// Manera hiper reducida

// var result = []

// for (let i = 0; i < arguments.length; i++)
// for (let j = 0; j < arguments.length; j++)
//     result[result.length] = arguments[i][j]

//     return result
