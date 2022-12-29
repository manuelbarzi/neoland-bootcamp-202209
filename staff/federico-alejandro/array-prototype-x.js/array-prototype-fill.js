Array.prototype.fill = function(newNumber, indexStart, indexEnd) {
    if (indexStart < 0 || indexStart === undefined ) indexStart = 0
   
    if (indexEnd === undefined) indexEnd = this.length
   
    for(i = indexStart; i < indexEnd; i++){
        this[i] = newNumber

    }
    return this
}