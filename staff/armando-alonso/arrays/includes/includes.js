function includes(array, check, fromIndex = 0) {

    if (typeof fromIndex !== 'number') fromIndex = 0

    if (typeof array === 'string') {
      
        if (array === check) return true
        
        for (let i = 0; i < array.length; i++) {
            let vword = check
    
            if (vword === array[i]) {
              return true
  
            }
        }
    }

    for (let i = fromIndex; i < array.length; i++) {
         if (check === array[i]) {
           return true
         }
    }
    return false
}


