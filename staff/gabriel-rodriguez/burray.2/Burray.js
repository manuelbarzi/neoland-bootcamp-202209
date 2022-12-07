function Burray(lengthOrElement = 0) {
    if (arguments.length <= 1) {
        if (typeof lengthOrElement === 'number')
            this.length = lengthOrElement
        else {
            this[0] = lengthOrElement

            this.length = 1
        }
    } else {
        this.length = 0

        for (let i = 0; i < arguments.length; i++) {
            const element = arguments[i]

            this[this.length] = element

            this.length++
        }
    }
}

Burray.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        callback(element, i)
    }   
}

Burray.prototype.includes = function(searchElement, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++)
        if (this[i] === searchElement)
            return true

    return false
}

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

Burray.prototype.pop = function() {
    const last = this[this.length - 1]

    delete this[this.length - 1]

    this.length--

    return last
}

Burray.prototype.push = function () {
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i]

        this[this.length] = element

        this.length++
    }

    return this.length
}