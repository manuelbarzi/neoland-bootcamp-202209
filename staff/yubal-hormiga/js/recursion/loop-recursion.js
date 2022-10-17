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


// VM5490:14 101
// VM5490:14 201
// VM5490:14 301
// VM5490:14 401
// VM5490:14 501
// VM5490:18 102
// VM5490:18 202
// VM5490:18 302
// VM5490:18 402
// VM5490:18 502
// VM5490:24 HOLA
// VM5490:24 MUNDO
// VM5490:34 $hola$
// VM5490:34 $mundo$
// undefined