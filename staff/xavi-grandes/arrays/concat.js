// para funciones variables, usamos 'arguments' 

function concat() {
  var result = "";

  for (var i = 0; i < arguments.length; i++)
    if (i + 1 === arguments.length) {
      var result = result + arguments[i];
    } else {
      var result = result + arguments[i] + ",";
    }
  var newArray = result.split(",");

  return newArray;
}

//   function concat(array1, array2) {

//   newArrayConcat = []

//   for (var i = 0; 0 < arguments.length; i++){
//     let elemets = arguments[i]
    
//     newArrayConcat.push(arguments[i])
//   }

//   return newArrayConcat

// }
