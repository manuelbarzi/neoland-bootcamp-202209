function flat(array, deep = 1) {
    var counterDeep = 0

    return (function call(arr) {
        var result = []

        for (var i = 0; i < arr.length; i++)
            if (arr[i] instanceof Array)
                for (j = 0; j < arr[i].length; j++)
                    result[result.length] = arr[i][j]
            else
                result[result.length] = arr[i]

        if (++counterDeep < deep) {
            for (i = 0; i < result.length; i++)
                if (result[i] instanceof Array)
                    return call(result)
        }

        return result

    })([...array])
}