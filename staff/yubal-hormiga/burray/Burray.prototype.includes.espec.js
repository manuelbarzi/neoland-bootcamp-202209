describe('Burray.prototype.includes', () => {
    it('returns true for an element that exists in the instance', () => {
        const b = new Burray('cat', 'dog', 'bat')

        const result = b.includes('dog')

        expect(result).toBeTrue()
    })

    it('returns false for an element that does not exist in the instance', () => {
        const b = new Burray('cat', 'dog', 'bat')

        const result = b.includes('jirafe')

        expect(result).toBeFalse()
    })

    it('returns false for an element that does not exist in the instance from an index', () => {
        const b = new Burray('cat', 'dog', 'bat', 'jirafe', 'rhino', 'elephant', 'cat', 'snake')

        const result = b.includes('dog', 5)

        expect(result).toBeFalse()
    })
})