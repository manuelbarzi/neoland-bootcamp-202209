Array.prototype.numRepetition = function () {
    const result = [...new Set(this)].map(num => {
        return {
            element: num,
            count: this.filter(n => n === num).length
        }
    })
    return result
    // -------------------
    // const newArray = []

    // for (let num of this) {
    //     let newElement = true

    //     for (let n of newArray) {
    //         if (n.element === num) {
    //             n.count++
    //             newElement = false
    //         }
    //     }
    //     if (newElement) { 
    //         newArray[newArray.length] = {
    //             element: num,
    //             count: 1
    //         }

    //     }
    // }
    // return newArray
}
