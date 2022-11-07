Burray.prototype.map = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    const results = new Burray(this.length)

    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        const result = callback(element)

        results[i] = result
    }

    return results
}