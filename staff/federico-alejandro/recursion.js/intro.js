//var a = [10, 20, 30, 40, 50]
//var a = [10, 20, 30, [100, 200, 300, 400, 500], 40, 50]
var a = [10, 20, 30, [100, 200, 300, 400, [1000, 2000, 3000, 4000, [10000, 20000, 30000, 40000, 50000], 5000], 500], 40, 50]

function printArray(array) {
    for (var i = 0; i < array.length; i++) {
        var elem = array[i]

        if (elem instanceof Array) {
            printArray(elem)
        } else console.log(elem)
    }
}
/*printArray(a)
VM2534:11 10
VM2534:11 20
VM2534:11 30
VM2534:11 100
VM2534:11 200
VM2534:11 300
VM2534:11 400
VM2534:11 1000
VM2534:11 2000
VM2534:11 3000
VM2534:11 4000
VM2534:11 10000
VM2534:11 20000
VM2534:11 30000
VM2534:11 40000
VM2534:11 50000
VM2534:11 5000
VM2534:11 500
VM2534:11 40
VM2534:11 50
undefined*/