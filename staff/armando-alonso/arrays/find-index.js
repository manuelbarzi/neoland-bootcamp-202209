Array.prototype.findIndex = function(callback){

    for (let i = 0; i < this.length; i++) {
         let value = callback(this[i])
         if (value === true) return i
        
    }
    return -1
}