Array.prototype.splice = function (start, deleteCount, items) {
    const eliminatedElements = []
    const argumentsLength = arguments.length - 2
    let argumentsCounter = 2
    const elementsMovement = argumentsLength - deleteCount
    let deletedCounter = deleteCount

    // no items to insert
    if (!argumentsLength) {
        for (let i = 0; i < deleteCount; i++) {
            for (let j = start; j < this.length; j++) {
                if (deletedCounter) {
                    eliminatedElements[eliminatedElements.length] = this[j]

                    deletedCounter--
                }
                this[j] = this[j + 1]
            }
            this.length--
        }
        return eliminatedElements
    }

    // move elements on the array
    for (let i = 0; i < elementsMovement; i++) {
        for (let j = this.length - 1; j >= start; j--) {
            this[j + 1] = this[j]
        }
    }

    // insert elements into array and add eliminated to returned array 
    for (let i = start; i < (start + argumentsLength); i++) {
        if (deletedCounter) {
            eliminatedElements[eliminatedElements.length] = this[i + elementsMovement]
            deletedCounter--
        }
        this[i] = arguments[argumentsCounter]

        argumentsCounter++
    }

    return eliminatedElements
}