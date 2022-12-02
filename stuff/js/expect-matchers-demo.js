function expect(value) {
    return {
        toBeTrue: function() {
            if (typeof value !== 'boolean') throw new TypeError(value + ' is not a boolean')
            if (!value) throw new Error(value + ' is not true')
        },
        
        toBeFalse: function() {
            if (typeof value !== 'boolean') throw new TypeError(value + ' is not a boolean')
            if (value) throw new Error(value + ' is not false')
        },

        toThrowError(errorType, errorMessage) {
            try {
                value()
            } catch(error) {
                if (!(error instanceof errorType)) throw new Error('Expected: ' + error + ' to be ' + errorType)
                else if (error.message !== errorMessage) throw new Error('Expected: ' + error.message + ' to be ' + errorMessage)
            }
        }
    }
}
undefined
expect(function() {
    throw new SyntaxError('code is wrong here')
}).toThrowError(SyntaxError, 'code is wrong here')
undefined
expect(function() {
    throw new SyntaxError('code is wrong here')
}).toThrowError(TypeError, 'code is wrong here')
VM15539:17 Uncaught Error: Expected: SyntaxError: code is wrong here to be function TypeError() { [native code] }
    at Object.toThrowError (<anonymous>:17:58)
    at <anonymous>:3:4
toThrowError @ VM15539:17
(anonymous) @ VM15622:3
expect(function() {
    throw new SyntaxError('code is wrong here')
}).toThrowError(SyntaxError, 'code is wrong here 2')
VM15539:18 Uncaught Error: Expected: code is wrong here to be code is wrong here 2
    at Object.toThrowError (<anonymous>:18:64)
    at <anonymous>:3:4
toThrowError @ VM15539:18
(anonymous) @ VM15717:3