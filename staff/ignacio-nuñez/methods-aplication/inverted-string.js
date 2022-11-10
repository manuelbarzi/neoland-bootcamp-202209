String.prototype.invertedString = function () {
    let result = this.toString().split('').reverse().join('')

    return result

    //---------------------------
    // let newWord = ''

    // for(let c of this)
    // newWord = c + newWord
    
    // return newWord
}   