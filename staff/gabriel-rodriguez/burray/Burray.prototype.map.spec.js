describe('Burray.prototype.map', () => {
    it('maps all elements multiplying by 2', () => {
        const b = new Burray(1, 4, 9, 16)

        const b2 = b.map(x => x * 2) // b.map(function(x) { return x * 2 })

        expect(b2).toBeInstanceOf(Burray)
        expect(b2).toHaveSize(4)
        // expect(b2[0]).toBe(2)
        // expect(b2[1]).toBe(8)    
        // expect(b2[2]).toBe(18)
        // expect(b2[3]).toBe(32)
        expect(b2).toEqual(new Burray(2, 8, 18, 32))
    })

    it('fails on no callback', () => {
        const b = new Burray

        // let _error = null

        // try {
        //     b.map()
        // } catch(error) {
        //     _error = error
        // }
        
        // expect(_error).toBeInstanceOf(TypeError)
        // expect(_error.message).toBe('undefined is not a function')

        expect(() => b.map()).toThrowError(TypeError, 'undefined is not a function')
    })
})