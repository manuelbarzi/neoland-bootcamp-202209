
function capitalCaseCharAt(string) {
    var result = [];
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    var firstLetter = string[0]

    for (var i = 0; i < lowerCase.length; i++) {
        var lowerCaseLetter = lowerCase[i];

        if (lowerCaseLetter === firstLetter) {
            result[0] = upperCase[i]
        }
    }

    for (let i = 1; i < string.length; i++) {
        const stringLetter = string[i];
        result.push(stringLetter)
    }

    return result.join('')
}




// function toCapitalCaseCharAt(string) {
//     var str = string


//     var strlength = str.length;

//     strlength--;

//     console.log(strlength)

// }


// const str = 'hello world';

// const str2 = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(str2);
