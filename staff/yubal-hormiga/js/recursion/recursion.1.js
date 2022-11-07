var a = [10, 20, 30, 40, 50]

function printArray(array) {
    for (var i = 0; i < array.length; i++) {
        var elem = array[i]

        console.log(elem)
    }
}

printArray(a)
// VM2960:7 10
// VM2960:7 20
// VM2960:7 30
// VM2960:7 40
// VM2960:7 50
// undefined