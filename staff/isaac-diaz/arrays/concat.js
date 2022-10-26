function concat(array1, array2) {
    var test = array1.length + array2.length

    var newArray = ['']
    
    newArray.length = test

    for(var i = 0; i < test; i++) {
        var element = array1[i]
        newArray[i] = element

        if(array1.length -1 === i) {
            for(var j = 0; j < array2.length; j++){
                var element = array2[j]

                newArray[i + 1 + j] = element
            }
            return newArray
        }
    }
}