var a = [10, 20, 30, [100, 200, 300, 400, [1000, 2000, 3000, 4000, [10000, 20000, 30000, 40000, 50000], 5000], 500], 40, 50]

function printArray(array) {
    for (var i = 0; i < array.length; i++) {
        var elem = array[i]

        if (elem instanceof Array) {
            printArray(elem)
        } else console.log(elem)
    }
}

printArray(a)