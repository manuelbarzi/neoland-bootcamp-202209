describe('Burray.prototype.includes', () => {

    it('case value is a number', () => {
        const b = new Burray(4, 5, 9, 20, 43, 64)

        const result = b.includes(5)

        expect(result).toBe(true)
    })

    it('case value is a negative number', () => {
        const b = new Burray(4, 5, 9, 20, 43, 64)

        const result = b.includes(-5)

        expect(result).toBe(false)
    })

    it('case value is a string', () => {
        const b = new Burray('blue', 'red', 'yellow', 'black', 'white')
        
        const result = b.includes('black')

        expect(result).toBe(true)
    })

    it('case value is a number and formIndex is a number', () => {
        const b = new Burray(4, 5, 9, 20, 43, 64)

        const result = b.includes(9, 1)

        expect(result).toBe(true)
    })

    it('case value is a number and formIndex is a string', () => {
        const b = new Burray(4, 5, 9, 20, 43, 64)

        const result = b.includes(9, 'hola')

        expect(result).toBe(true)
    })

    it('case value is a string and check value is a character', () => {
        const b = new Burray('Neoland')

        const result = b.includes('o')

        expect(result).toBe(false)
    })

    it('case value is a string and check value is a word', () => {
        const b = new Burray('Neoland')
        
        const result = b.includes('Neoland')

        expect(result).toBe(true)
    })

    it('case value is a strng and check value is a different word', () => {
        const b = new Burray('Neoland')

        const result = b.includes('oland')

        expect(result).toBe(false)
    })
})

