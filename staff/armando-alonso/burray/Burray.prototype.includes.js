Burray.prototype.includes = function(check, fromIndex = 0) {

    if (typeof fromIndex !== 'number') fromIndex = 0

    if (typeof this === 'string') {
      
        if (this === check) return true
        let vword = check
        for (let i = 0; i < this.length; i++) {
            if (vword === this[i]) {
              return true
  
            }
        }
    }

    for (let i = fromIndex; i < this.length; i++) {
         if (check === this[i]) {
           return true
         }
    }
    return false
}


