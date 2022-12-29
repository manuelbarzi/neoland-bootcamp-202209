describe('Burray.prototype.index-of', () => {
    it('return an element that exist in the instance', () => {
        const beasts = new Burray('ant', 'bison', 'camel', 'duck', 'bison')
        const result1 = 1
        beasts.indexOf('bison')

        expect(result1).toBe(1)
    })


    it('on not element found', () => {
        const beasts = new Burray('ant', 'bison', 'camel', 'duck', 'bison')
        const res =
        beasts.indexOf('giraffe')
        expect(res).toBe(-1)
    })
})