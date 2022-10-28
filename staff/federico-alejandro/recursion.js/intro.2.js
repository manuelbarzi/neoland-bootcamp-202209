//var a = [10, 20, 30, 40, 50]
var a = [ 10, 20, 30, [100, 200, 300, 400, 500], 40, 50]

function printArray(array) {
    for (var i = 0; i < array.length; i ++){
        var elem = array[i]

        if (elem instanceof Array) {
            for (var j = 0; j < elem.length; j++) {
                var elem2 = elem[j]

                console.log(elem2)
            }
        } else console.log(elem)
    }
}
/*printArray(a)
VM3143:14 10
VM3143:14 20
VM3143:14 30
VM3143:12 100
VM3143:12 200
VM3143:12 300
VM3143:12 400
VM3143:12 500
VM3143:14 40
VM3143:14 50
undefined*/