//var a = [10, 20, 30, 40, 50]
//var a = [10, 20, 30, [10, 20, 30, 40, 50], 40, 50]
var a = [10, 20, 30, [100, 200, 300, 400, [1000, 2000, 3000, 4000, [10000, 20000, 30000, 40000, 50000], 5000], 500], 40, 50]

function printArray(array) {
    for (var i = 0; i < array.length; i++) {
        var elem = array[i]

        if (elem instanceof Array) {
            for (var j = 0; j < elem.length; j++) {
                var elem2 = elem[j]

                if (elem2 instanceof Array) {
                    for (var k = 0; k < elem2.length; k++) {
                        var elem3 = elem2[k]
        
                        if (elem3 instanceof Array) {
                            for (var l = 0; l < elem3.length; l++) {
                                var elem4 = elem3[l]
                
                                console.log(elem4)
                            }
                        } else console.log(elem3)
                    }
                } else console.log(elem2)
            }
        } else console.log(elem)
    }
}

printArray(a)
VM3239:27 10
VM3239:27 20
VM3239:27 30
VM3239:25 100
VM3239:25 200
VM3239:25 300
VM3239:25 400
VM3239:23 1000
VM3239:23 2000
VM3239:23 3000
VM3239:23 4000
VM3239:21 10000
VM3239:21 20000
VM3239:21 30000
VM3239:21 40000
VM3239:21 50000
VM3239:23 5000
VM3239:25 500
VM3239:27 40
VM3239:27 50
undefined