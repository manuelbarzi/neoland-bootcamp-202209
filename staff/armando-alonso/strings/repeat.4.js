function repeat(word,value) {

    if(value < 0) throw new Error('Uncaught RangeError: Invalid count value: ' + value)

    if(!isFinite(value)) throw new Error('Uncaught RangeError: Invalid count value: Infinity')

    var dot = /[.]/

    let newWord = ''

    if (dot.test(value)) value = value - 1

    for (let i = 0; i < value; i++) {
        newWord = newWord + word  
    }

    return newWord
}