function hello() {
    var result = 'hello '
    
    for (var i = 0; i < arguments.length; i++){
        result += arguments[i]

        if(i < arguments.length -1)
            result += ', '
        else result += '!'
    }
    console.log(result)
}


// CASE 1
hello('A', 'B', 'C')
// 'hello A, B, C!'

// CASE 2
hello('D', 'E', 'F')
// 'hello D, E, F!'

// CASE 3
hello('D', 'E', 'F', 'G')
// 'hello D, E, F, G!'

// CASE 4
hello('D', 'E', 'F', 'G', 'H')
// 'hello D, E, F, G, H!'

// CASE 5
hello('D')
// 'hello D!'

// CASE 6
hello('D', 'E')
// 'hello D, E!'
// VM3042:11 hello A, B, C!
// VM3042:11 hello D, E, F!
// VM3042:11 hello D, E, F, G!
// VM3042:11 hello D, E, F, G, H!
// VM3042:11 hello D!
// VM3042:11 hello D, E!
// undefined