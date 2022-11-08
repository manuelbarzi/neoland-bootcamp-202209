Array.prototype.shuffle = function (){

    result = []

    for (let i = 0; i < orderedArray.length; i++){
        const element = orderedArray[i]

       var j = Math.floor(Math.random() * orderedArray.length)
       
    //    result[j] = element

       if (typeof result[j] === 'undefined'){
            result[j] = element
       } else {
       }
       

    }

    return result
}
