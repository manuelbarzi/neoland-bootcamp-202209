function at(arrayAt, indexAt) {
    
    if (indexAt < 0)
    indexAt = [arrayAt.length + indexAt]
    

    if (indexAt === undefined)
    indexAt = 0

    var result = arrayAt[indexAt]
    
    return result
}

