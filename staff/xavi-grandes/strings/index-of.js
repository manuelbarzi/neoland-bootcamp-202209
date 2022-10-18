function indexOf(string, searchString, position = 0) {
  // let result =  ''


  for (let i = position; i < string.length; i++) {
    let hasToContinue = true;

    if (searchString === ''){
        return position}

    for (let j = 0; j < searchString.length && hasToContinue; j++) {
      
        if (searchString[j] !== string[i + j]) {
        hasToContinue = false;
      } else {
        if (j === searchString.length - 1) {
          return i;
        }
      }
    }
  }
  return -1;
}

// --------------------------------------------------------------------

// for (var i = 0; i < string.length; i++){
//     char = string[i]

//     if (char === ' ' || char === ','){
//         if (result === searchString){
//             resultIndex = i - searchString.length
//             return resultIndex
//         } else {
//             result = '';
//             char = string[i + 1];
//             i = i + 1
//         }
//     }

//     result += char
// }
