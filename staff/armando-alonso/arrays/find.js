Array.prototype.find = function(callback){

    for (let i = 0; i < this.length; i++) {
         let value = callback(this[i])
         if (value === true) return this[i] 
    }
    return undefined
}