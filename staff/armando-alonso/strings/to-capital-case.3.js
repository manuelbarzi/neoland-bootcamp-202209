// function capitalCase(string) {
//   const str = string;
//   const str2 = str.charAt(0).toUpperCase() + str.slice(1);
//   console.log(str2);
// }

function capitalCase(string) {

    if (typeof string !== 'string') return new Error("This value is not a string")



  var result = "";

  var HAS_SPACES_REGEX = /\s/

  var ONLYMAYUS = /^[A-Z()]+$/

  inicio = 0;
  fin = 1;

  for (var i = inicio; i < fin; i++) {
    var char = string[i];

    if (ONLYMAYUS.test(char)) return new Error('This word starts with upper case')
    

    if (HAS_SPACES_REGEX.test(char)) {
        inicio++
        fin++
    }

    result = char;
  }

  var minusculas = "abcdefghijklmnñopqrstuvwxyz";
  var mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

  for (var i = 0; i < minusculas.length; i++) {
    var letra = minusculas[i];
    if (letra === result) {
      result = mayusculas[i];
      break;
    }
  }

  inicio++;
  end = string.length;
  lastresult = "";

  for (var i = fin; i < end; i++) {
    var char = string[i];

    lastresult = lastresult + char;
  }

  endresult = result + lastresult;

  return endresult;
}

// var str = string;
// // const str2 = 0;
// var strlength = str.length;
// strlength--;

// if (!indexEnd || indexEnd > string.length)
// indexEnd = string.length

// var prueba str.length(0)

//   function capitalCaseUpper(string) {
//     const str = string;
//     // const str2 = 0;
//     console.log(str.length);

//   }

//   function capitalCaseSlice(string) {
//     const str = string;
//     // const str2 = 0;
//     console.log(str.length);
//   }

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
