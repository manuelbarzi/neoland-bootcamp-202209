function slice(string, numA, numB) {
  var result = "";
 // numA menor 0, asigno el valor de la longitud y le sumo el valor de la variable, en este caso -3
  if (numA < 0) 
      numA = string.length + numA
// mismo caso que el anterior, en este caso asigno y sumo en un paso
  if (numB < 0) 
      numB += string.length;

  if (!numB || numB > string.length) 
    numB = string.length;

  if (numA > numB) {
    var numC = numA;
    numA = numB;
    numB = numC;
  }

  for (var i = numA; i < numB; i++) {
    var res = string[i];

    result = result + res;
  }

  return result;
}
