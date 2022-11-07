function concat(thing1, thing2, thing3) {
    var result = ''

    if (typeof thing1 === 'number') {
        result = 'thing1 concat is not a function'

    } else {
        result = thing1 + thing2 + thing3
    }
    return result
}
