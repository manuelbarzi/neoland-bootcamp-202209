function Burray(lengthOrElement = 0) {
    if (typeof lengthOrElement === 'number')
        this.length = lengthOrElement
    else {
        this[0] = lengthOrElement
        this.length = 1
    }
}