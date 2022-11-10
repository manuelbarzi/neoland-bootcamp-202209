Array.prototype.depth = function () {
    let counter = 0;

    (function depthCounter(array) {
        const result = []
        let arrayFounded = false;

        for (let i = 0; i < array.length; i++) {
            if (array[i] instanceof Array) {
                arrayFounded = true
                for (let j = 0; j < array[i].length; j++) {
                    result[result.length] = array[i][j]
                }
            }
        }
        if (arrayFounded) {
            counter++
            return depthCounter(result)
        }
    })(this)

    return counter
}