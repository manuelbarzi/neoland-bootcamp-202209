function expect(value) {
    return {
        toBeTrue: function() {
            if (typeof value !== 'boolean') throw new TypeError(value + ' is not a boolean')
            if (!value) throw new Error(value + ' is not true')
        },
        
        toBeFalse: function() {
            if (typeof value !== 'boolean') throw new TypeError(value + ' is not a boolean')
            if (value) throw new Error(value + ' is not false')
        }
    }
}

undefined
expect(true).toBeTrue()
undefined
expect(true).toBeFalse()
VM2607:10 Uncaught Error: true is not false
    at Object.toBeFalse (<anonymous>:10:30)
    at <anonymous>:1:14
toBeFalse @ VM2607:10
(anonymous) @ VM2718:1
var result = [10, 20, 30].includes(20)

expect(result).toBeTrue()
undefined
var result = [10, 20, 30].includes(50)

expect(result).toBeTrue()
VM2607:5 Uncaught Error: false is not true
    at Object.toBeTrue (<anonymous>:5:31)
    at <anonymous>:3:16
toBeTrue @ VM2607:5
(anonymous) @ VM2883:3
var result = [10, 20, 30].includes(50)

expect(result).toBeFalse()
undefined