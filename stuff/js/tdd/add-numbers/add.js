function add(a, b) {
    if (typeof a !== 'number') return new Error('a is not a number')
    if (typeof b !== 'number') return new Error('b is not a number')
    
    return a + b // happy path :)
}