

function concat(string1, string2) {

    var result = ''

    for (var i = 0; i < string1.length; i++) {
        var char = string1[i]
        result = result + char // result = result + string[i] (es lo mismo quitando la linea de arriba)
    }


    for (var i = 0; i < string2.length; i++) {
        
      result = result + string2[i]

    }

    return result

}
























// function concat(string1, string2)

// var result1 = ''

// for (var i = 0; i < string1.length; i ++) {
//    var char = string1[i]

//    result1 += char


// var result2 = ''

// for (var i = 0;  i < string2.length; i++) {
//     var char = string2[i]

//     result2 += char

// }

// return result1 + ' ' + result2
// }



function concat() {
    var result = ''


    for (var i = 0; i < arguments.length; i++) { // se utiliza para concatenar la totalidad del array
        var string = arguments[i]

        result += string // o result = result + string
    }

    return result
}
/* la variable arguments recoge todos los valores primitivos del interior de una funcion */






