var a = [100, 200, 300, 400, 500]

function loop(array) {
    (function iterate(i) { // HOW
       if (i < array.length) {
           console.log(array[i]) // WHAT

           iterate(i + 1)
       }
    })(0)
}

loop(a)


// VM4003:6 100
// VM4003:6 200
// VM4003:6 300
// VM4003:6 400
// VM4003:6 500
// undefined