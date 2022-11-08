// function concat(string1, string2) {
//   var result1 = "";

//   for (var i = 0; i < string1.length; i++) {
//     var character = string1[i];
//     result1 += character;
//   }

//   var result2 = "";

//   for (var i = 0; i < string2.length; i++) {
//     var character = string2[i];
//     result2 += character;
//   }
//   return result1 + ' ' + result2
// }

function concat() {
  var result = "";

  for (var i = 0; i < arguments.length; i++) {
    var string = arguments[i];
    result += string;
  }
  return result;
}
