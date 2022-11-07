Array.prototype.group = function(callback){

    let newArray = []
    
    for (let i = 0; i < this.length; i++) {

        let value = callback(this[i])

        if (!newArray[value]) newArray[value] = []

        newArray[value].push(this[i])
    }
    return newArray
}
