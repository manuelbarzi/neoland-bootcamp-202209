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
