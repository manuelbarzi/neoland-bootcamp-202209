Array.prototype.splice = function (start, deleteCount, items) {
    const eliminatedElements = []
    const argumentsLength = arguments.length - 2
    let argumentsCounter = 2

    if (arguments.length <= 2) {
        for (let i = 0; i < deleteCount; i++) {
            for (let j = start; j < this.length - 1; j++) {
                if (j === start) eliminatedElements[eliminatedElements.length] = this[j]

                this[j] = this[j + 1]
            }
            this.length--
        }
        return eliminatedElements
    }
    deleteCount > this.length - start ? deleteCount = this.length - start : deleteCount
    !deleteCount ? argumentsLengthOrDeleteCount = argumentsLength : argumentsLengthOrDeleteCount = deleteCount

    if (!deleteCount || deleteCount < 0) {
        for (let i = 0; i < argumentsLength; i++) {
            for (let j = this.length; j > start; j--) {

                this[j] = this[j - 1]
            }
        }
    }
    for (let i = 0; i < argumentsLengthOrDeleteCount; i++) {
        if (deleteCount) eliminatedElements[eliminatedElements.length] = this[i + start]

        this[i + start] = arguments[argumentsCounter]
        argumentsCounter++
    }
    return eliminatedElements
}