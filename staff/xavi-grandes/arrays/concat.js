// para funciones variables, usamos 'arguments' de manera que si 

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
