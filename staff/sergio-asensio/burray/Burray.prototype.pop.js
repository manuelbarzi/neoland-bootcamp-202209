Burray.prototype.pop = function() {
    const last = this[this.length -1]

    delete this[this.length -1]

    this.length--

    return last
}