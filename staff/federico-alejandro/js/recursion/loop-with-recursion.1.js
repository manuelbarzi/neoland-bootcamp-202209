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
/*100
 200
 300
 400
 500
*/