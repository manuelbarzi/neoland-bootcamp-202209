
var array = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
var r = 6
var index 


var addToResul = function(n){
     return n.length > r
    
}

var result = filter(array,addToResul, index)

console.assert( result.length === 3)
console.assert( result[0] === 'exuberant')
console.assert( result[1] === 'destruction')
console.assert( result[2] === 'present')

filter(array,function(n){
    return n.length > r

   
}, 4)
