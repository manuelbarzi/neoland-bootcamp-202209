function flat(array, depth = 1) {
    const result = []

    for (let i = 0; i < array.length; i++) {

        if (array[i] instanceof Array) {
            for (let j = 0; j < array[i].length; j++)
                result[result.length] = array[i][j]
        }
        else {
            result[result.length] = array[i]
        }
    }
    if (depth > 1)
        for (let i = 0; i < result.length; i++)
            if (result[i] instanceof Array)
                return flat(result, --depth)

    return result
}


