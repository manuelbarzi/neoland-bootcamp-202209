Array.prototype.depth = function () {
    let counter = 0
    let arrayFounded = false

    for (i = 0; i < this.length && !arrayFounded; i++) {
        if (this[i] instanceof Array)
            arrayFounded = true
    }
    if (arrayFounded) {
        (function depthCounter(array) {
            const result = []
            counter++

            for (let i = 0; i < array.length; i++) {
                if (array[i] instanceof Array) {
                    for (let j = 0; j < array[i].length; j++)
                        result[result.length] = array[i][j]
                }
            }
            for (let i = 0; i < result.length; i++)
                if (result[i] instanceof Array)
                    return depthCounter(result)
        })(this)
    }
    return counter
}