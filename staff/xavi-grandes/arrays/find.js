function find(arrayFind1, callback){
    for (var i = 0; i < arrayFind1.length; i++){        
        const found = callback(arrayFind1[i])

        if (found){
            return arrayFind1[i]
        }
        
        // const element = arrayFind1[i]

        // const found = callback(element)

        // if (found === true){
        //     return element
        // }
    }
   
}