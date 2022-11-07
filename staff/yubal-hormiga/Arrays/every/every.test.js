//!The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
//*CASE 1. all elements past de test
var array = [1,5,42,30,10]
var r = 5
var index 

var addToResul = function (n){
    return n <  r
        
    
} 


var result = every(array,addToResul)
console.assert(result === true)

