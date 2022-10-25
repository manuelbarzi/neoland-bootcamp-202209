Array.prototype.arrToObj = function(){
let result = {}

    this.forEach((n, i) => result[i] = n)

    result.length = this.length

    return result
}