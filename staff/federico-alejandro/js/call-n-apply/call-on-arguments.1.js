function add() {
     /*
    var result = 0

    Array.prototype.forEach.call(arguments, function(elem) {
        result += elem
    })

    return result
    */
   
   // mismo resultado pero con reduce queda con menos lineas y mejor
    return Array.prototype.reduce.call(arguments, function(accum, elem) {
         return accum + elem
   })
}
console.log(add(1, 2, 3, 4, 5, 6)) // retorna 21