Array.prototype.every = function (callback) {

    for (let i = 0; i < this.length; i++) {
        let back = callback(this[i])
        if (back === false) return false
        
    }
    return true
    
}