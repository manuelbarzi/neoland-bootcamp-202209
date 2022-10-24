function indexOf(array, check, checkTwo = 0) {
    
    for (let i = 0; i < array.length; i++) {

        if(check === array[i] && checkTwo > 1){
    
            for (j = i+1 ; j < array.length; j++) {

              if (check === array[j]) return j
            }
        }
        if(check === array[i] && checkTwo <= 1) return i
    }
    return -1
}