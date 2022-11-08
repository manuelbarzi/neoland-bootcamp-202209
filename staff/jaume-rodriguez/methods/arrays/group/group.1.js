function group(array) {
    var property = 'type'
    var output = []
    var aux = array[property]

    for (let i = 0; i < array.length; i++) {
        output[output.length] = array[i]
        if ((!output[aux])) {
            output[aux] = []
        }
        output[aux].push()
    }

    return output
}