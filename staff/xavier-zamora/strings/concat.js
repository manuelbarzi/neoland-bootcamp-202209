/*var a = "hola mundo"
var b = "hellow world"
var c = "hw"

var aA = 1
var bB = 2
var cC = 3

var arA = ["A", "B", "C"]
var arB = [1, 2, 3]
var arC = [1, "B", "C"]

var d*/

var resultado

function concat(a, b /*, *args*/) {
    debugger
    var star_args = Array.prototype.slice.call (arguments, concat.length)
    var j = arguments.length - 2
    var array = []
    if(a === undefined) a = "undefined"
    if(b === undefined) b = "undefined"
    array.push(a)
    array.push(b)
 
    for(var i = 0; j > 0; i++){
        j--
        if(star_args[i] === undefined){
            star_args[i] = "undefined"
        }
        if(typeof star_args[i] === "object"){
        array.push(star_args[i])
        }else{
            var correct1 = star_args[i].toString()
            array.push(star_args[i])
        }
    }

    return array.toString()
}
