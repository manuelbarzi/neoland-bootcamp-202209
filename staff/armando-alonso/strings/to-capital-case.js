// function capitalCase(string) {
//   const str = string;
//   const str2 = str.charAt(0).toUpperCase() + str.slice(1);
//   console.log(str2);
// }

function capitalCase(string) {
  // comprobamos si el valor recibido esta vacío

  if (string.length === 0) return new Error("Send a word");

  // comprobamos si el valor recibido es un string

  if (typeof string !== "string")
    return new Error("This value is not a string");

  // extraemos la primera letra de la palabra

  var result = "";
  var HAS_SPACES_REGEX = /\s/;
  var ONLYMAYUS = /^[A-Z()]+$/;
  var SPECIALCHARS = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  var inicio = 0;
  var fin = 1;

  for (var i = inicio; i < fin; i++) {
    var char = string[i];

    // comprobamos que la primera letra no sea una mayúscula. De ser así les decimos que ya es una mayúscula

    if (ONLYMAYUS.test(char))
      return new Error("This word starts with capital case");

    // comprobamos que la primera letra no sea un special character.

    if (SPECIALCHARS.test(char))
      return new Error("This word starts with special char");

    // comprobamos que la palabra contenga un espacio al principio y de ser así que se salte ese valor por el siguiente

    if (HAS_SPACES_REGEX.test(char)) {
      inicio++;
      fin++;
    }

    result = char;
  }

  // aqui lo que hacemos es establecer la comparación por posición de las letras del abecedario en cada uno de los strings

  var minusculas = "abcdefghijklmnñopqrstuvwxyz";
  var mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

  for (var i = 0; i < minusculas.length; i++) {
    var letra = minusculas[i];
    if (letra === result) {
      result = mayusculas[i];
      break;
    }
  }

  // aqui sumamos uno a las variables de inicio para que nos extraiga el resto de la palabra que luego sumaremos a la letra que hemos convertido en mayuscula

  inicio++;
  var end = string.length;
  var lastresult = "";

  for (var i = fin; i < end; i++) {
    var char = string[i];

    lastresult = lastresult + char;
  }

  // aqui es donde sumamos ambas variables

  endresult = result + lastresult;

  return endresult;
}

// //   str.length

// charAt(2)

// var A = 'A'
//     var a = 'a'
//     var B = 'B'
//     var b = 'b'
//     var C = 'C'
//     var c = 'c'
//     var D = 'D'
//     var d = 'd'
//     var E = 'E'
//     var e = 'e'
//     var F = 'F'
//     var f = 'f'
//     var G = 'G'
//     var g = 'g'
//     var H = 'H'
//     var h = 'h'
//     var I = 'I'
//     var i = 'i'
//     var J = 'J'
//     var j = 'j'
//     var K = 'K'
//     var k = 'k'
//     var L = 'L'
//     var l = 'l'
//     var M = 'M'
//     var m = 'm'
//     var N = 'N'
//     var n = 'n'
//     var O = 'O'
//     var o = 'o'
//     var P = 'P'
//     var p = 'p'
//     var Q = 'Q'
//     var q = 'q'
//     var R = 'R'
//     var r = 'r'
//     var S = 'S'
//     var s = 's'
//     var T = 'T'
//     var t = 't'
//     var U = 'U'
//     var u = 'u'
//     var V = 'V'
//     var v = 'v'
//     var W = 'W'
//     var w = 'w'
//     var X = 'X'
//     var x = 'x'
//     var Y = 'Y'
//     var y = 'y'
//     var Z = 'Z'
//     var z = 'z'
