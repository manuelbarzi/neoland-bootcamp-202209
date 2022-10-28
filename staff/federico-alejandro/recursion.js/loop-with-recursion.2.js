var a = [100, 200, 300, 400, 500]

function loop(array, callback) {
    (function iterate(i) {
        if (i < array.length) {
            callback(array[i])

            iterate(i = 1)
        }
    })(0)
} // retorna 101, 201, 301, 401, 501

loop(a, function(n) {
    console.log(n + 1)
})

loop(a, function(n) {
    console.log(n + 2)
}) // retorna 102, 202, 302, 402, 502

var s = ['hola', 'mundo']

loop(s, function(w) {
    console.log(w.toUpperCase())
}) // reotrna HOLA MUNDO

var r =[]

loop(s, function(w) {
    r.push('$' + w + '$' ) // retorna ['$hola$', '$mundo$']
})

loop(r, function(w) {
    console.log(w) // retorna $hola$ $mundo$
})