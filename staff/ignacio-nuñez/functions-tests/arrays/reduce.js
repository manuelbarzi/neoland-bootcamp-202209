function reduce(array, callback, initialValue = 0){
    let previousValue = initialValue

    for(let i = 0; i < array.length; i++){

        if (initialValue === 0){
            previousValue = array[i]
            i++
            initialValue++
        } 
        let callbackValue = callback(previousValue, array[i], i, ...array)
        
        previousValue = callbackValue
    }
    return previousValue
}