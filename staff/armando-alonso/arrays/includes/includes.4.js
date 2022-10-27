function includes(array, check, fromIndex = 0) {

    if (typeof fromIndex !== 'number') fromIndex = 0

    if (typeof array === 'string') {
        
      for (let i = 0; i < array.length; i++) {
          let vword = check
          let nword = "";
  
          if (vword[0] === array[i]) {
  
            for (let j = 0; j < check.length && vword[j] === array[i + j]; j++) {
  
              nword = nword + array[i + j];
            }
  
            if (nword.length === check.length) {
              return true
            }
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