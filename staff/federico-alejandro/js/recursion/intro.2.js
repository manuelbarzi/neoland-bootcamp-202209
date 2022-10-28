//var a = [10, 20, 30, 40, 50]
var a = [10, 20, 30, [100, 200, 300, 400, 500], 40, 50]

function printArray(array) {
    for (var i = 0; i < array.length; i++) {
        var elem = array[i]

        if (elem instanceof Array) {
            for (var j = 0; j < elem.length; j++) {
                var elem2 = elem[j]

                console.log(elem2)
            }
        } else console.log(elem)
    }
}
printArray(a)
/* 10
 20
 30
 100
 200
 300
 400
 500
 40
 50*/
