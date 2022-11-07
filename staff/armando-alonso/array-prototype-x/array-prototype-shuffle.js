Array.prototype.shuffle = function () {

    var newArray = []

    let min = 0
    let max = this.length

    for (let i = 0; i < this.length; i++) {
        var random = Math.floor(Math.random() * (max - +min)) + +min
        if (newArray[random] === undefined){
            newArray[random] = this[i]
        } else i--  
    }
    return newArray
}
