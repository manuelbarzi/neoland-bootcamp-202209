function forEach (array, callbackForEach) {
    
    const newArray = []
    
    for(let i = 0; i < array.length; i++){
        let number = array[i]

        var callback = callbackForEach(number)

        newArray.push(callback)
    }
    return newArray
}