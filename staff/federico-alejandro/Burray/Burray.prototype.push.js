// paso 1
/*Burray.prototype.push = function(element) {
    this[this.length] = element

    this.length++

    return this.length
}*/
//paso 2
Burray.prototype.push = function () {
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i]

        this[this.length] = element

        this.length++
    }
    return this.length
}