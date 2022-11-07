Array.prototype.filter = function (callback) {

    let newArray = []

    for (let i = 0; i < this.length; i++) {
        let back = callback(this[i])
        if (back === true) {
            newArray[newArray.length] = this[i]
        }
    }
    return newArray
}