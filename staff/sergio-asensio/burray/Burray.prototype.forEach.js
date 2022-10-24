Burray.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        callback(element,i)
    }
}