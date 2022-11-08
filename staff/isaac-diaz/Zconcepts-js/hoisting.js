//console.log(a())

//function a() { return 1 } // declaration & definition all in one (fully hoisted)
var a = function() { return 1 } // declaration + definition (only declaration is hoisted)

console.log(a())