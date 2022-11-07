//!array.some()  El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
//*CASE1 if elemente is in the array true 
var array = [1,2,3,4,5]
var r = 5
var index = ''
var result = []
var addToResul = function (n){
    if( n === r){
        result = true
    }else false
}

some(array,index,addToResul)
console.assert( result === true)
//*CASE2 if elemente is not in the array false
var array = [1,2,3,4,5]
var r = 6
var index = ''
var result = []
var addToResul = function (n){
    if( n === r){
        result = true 
    }else {
        result = false} 
}

some(array,index,addToResul)
console.assert( result === false)

//*CASE3 If you need to found value from a index
var array = [1,2,3,4,5]
var r = 5
var index = '4'
var result = []
var addToResul = function (n){
    if( n === r){
        result = true 
    }else {
        result = false} 
}

some(array,index,addToResul)
console.assert( result === true)