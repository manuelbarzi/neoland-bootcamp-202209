var a = [100, 200, 300, 400, 500]

function loop(array, callback) {
    (function iterate(i) { // HOW
       if (i < array.length) {
           callback(array[i]) // WHAT

           iterate(i + 1)
       }
    })(0)
}

loop(a, function(n) {
    console.log(n + 1)
})

loop(a, function(n) {
    console.log(n + 2)
})

var s = ['hola', 'mundo']

loop(s, function(w) {
    console.log(w.toUpperCase())
})

var r = []

loop(s, function(w) {
    r.push('$' + w + '$')
})

loop(r, function(w) {
    console.log(w)
})