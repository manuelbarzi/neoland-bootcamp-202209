Burray.prototype.push = function() {

    this.length += arguments.length

    for (let i = 0; i < arguments.length; i++) {

        this[i] = arguments[i];
    }
    return this.length
}