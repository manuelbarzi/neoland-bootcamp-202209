function at(index) {

    if (typeof index === 'string') return this[0]

    if (index < 0) {
        pos = this.length
        pos1 = pos + index 
        return this[pos1]
    }

    for (var i = 0; i < this.length; i++) {
        var pos = this[i]
        if (i === index) {
            return pos
        }
    } 
}