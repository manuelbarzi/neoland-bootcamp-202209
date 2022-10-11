
function capitalCaseCharAt(string) {
    var result = "";
    indexStart = 0;
    indexEnd = 1;

    for (var i = indexStart; i < indexEnd; i++) {
        var char = string[i];

        result = result + char;
    }

    var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for (var i = 0; i < lowerCase.length; i += 2) {
        var letter = lowerCase[i];

        if (letter === result) {
            result = upperCase[i]

            return result;
        }

    }

}



// function capitalCaseCharAt(string) {


//     var result = "";

//     inicio = 0;
//     fin = 1;

//     for (var i = inicio; i < fin; i++) {
//         var char = string[i];

//         result = result + char;
//     }

//     var minusculas = 'abcdefghijklmnñopqrstuvwxyz'
//     var mayusculas = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'



//     for (var i = 0; i < minusculas.length; i += 2) {
//         var letra = minusculas[i];
//         if (letra === result) {
//             result = mayusculas[i]

//             return result
//         }

//     }

// }








// function toCapitalCaseCharAt(string) {
//     var str = string


//     var strlength = str.length;

//     strlength--;

//     console.log(strlength)

// }


// const str = 'hello world';

// const str2 = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(str2);

  // var A = 'A'
    // var a = 'a'
    // var B = 'B'
    // var b = 'b'
    // var C = 'C'
    // var c = 'c'
    // var D = 'D'
    // var d = 'd'
    // var E = 'E'
    // var e = 'e'
    // var F = 'F'
    // var f = 'f'
    // var G = 'G'
    // var g = 'g'
    // var H = 'H'
    // var h = 'h'
    // var I = 'I'
    // var i = 'i'
    // var J = 'J'
    // var j = 'j'
    // var K = 'K'
    // var k = 'k'
    // var L = 'L'
    // var l = 'l'
    // var M = 'M'
    // var m = 'm'
    // var N = 'N'
    // var n = 'n'
    // var O = 'O'
    // var o = 'o'
    // var P = 'P'
    // var p = 'p'
    // var Q = 'Q'
    // var q = 'q'
    // var R = 'R'
    // var r = 'r'
    // var S = 'S'
    // var s = 's'
    // var T = 'T'
    // var t = 't'
    // var U = 'U'
    // var u = 'u'
    // var V = 'V'
    // var v = 'v'
    // var W = 'W'
    // var w = 'w'
    // var X = 'X'
    // var x = 'x'
    // var Y = 'Y'
    // var y = 'y'
    // var Z = 'Z'
    // var z = 'z'