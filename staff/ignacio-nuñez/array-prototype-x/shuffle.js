Array.prototype.shuffle = function () {
    const result = []
    const avalaibleIndexes = []
    
    for (let i = 0; i < this.length; i++)
        avalaibleIndexes[avalaibleIndexes.length] = i
    
    for (let i = 0; i < this.length; i++) {
        const randomIndex = Math.floor(Math.random() * avalaibleIndexes.length)

       const index = avalaibleIndexes[randomIndex]

        result[i] = this[index]
    
        for(let j = randomIndex; j < avalaibleIndexes.length-1; j++){
            avalaibleIndexes[j] = avalaibleIndexes[j+1]
        }
        avalaibleIndexes.length--
    }
    return result
}

