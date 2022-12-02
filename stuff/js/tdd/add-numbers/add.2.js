function add(a, b) {
    if (typeof b !== 'number') return new Error('b is not a number')
    
    return a + b // happy path :)
}