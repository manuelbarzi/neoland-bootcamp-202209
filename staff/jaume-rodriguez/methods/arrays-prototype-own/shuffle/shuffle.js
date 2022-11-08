Array.prototype.shuffle = function () {
    let result = []
    let indexes = []

    for (let i = 0; i < this.length; i++) {
        indexes[indexes.length] = i
    }

    for (let i = 0; i < this.length; i++) {
        const randomIndexes = Math.floor(Math.random() * indexes.length)

        const index = indexes[randomIndexes]    // Con este paso nos aseguramos que el index es en base a un array que ya ha eliminado un i utilizado.

        result[i] = this[index]

        for (let j = randomIndexes; j < indexes.length - 1; j++) {
            indexes[j] = indexes[j + 1]
        }
        indexes.length--

    }
    return result
}
