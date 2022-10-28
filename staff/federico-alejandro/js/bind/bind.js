var nums = { 0: 10, 1: 20, 2: 30, length: 3 }
var chars = ['a', 'b', 'c']

function bind(func, ctx) {
    // devuelve una funcion
    return function() {//llamo la func con apply y le paso los argumentos que recibo
    //  funciona llamada y con argumentos 
        return func.apply(ctx, arguments)
    }
}
// bind enlaza esta funcion con este contexto (nums o chars, o cualquier variable que haya sido creada)
var forEachNum = bind(Array.prototype.forEach, nums)
var forEachChar = bind(Array.prototype.forEach, chars)
// mismas funciones pero pero con diferentes contextos
forEachNum(function(n) { console.log(n) })

var sum = 0
forEachNum(function(n) {sum += n })
console.log(sum)

forEachChar(function(c) { console.log(c) })

var str = ''
forEachChar(function(n) {str += n })
console.log(str)