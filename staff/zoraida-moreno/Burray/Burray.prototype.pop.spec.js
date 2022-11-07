describe('Burray.prototype.pop', () => {
    it('removes and returns last element', () => {
        const b = new Burray(10, 20, 30)

        const last = b.pop()

        expect(last).toBe(30)
        expect(b.length).toBe(2)
        expect(b[0]).toBe(10)
        expect(b[1]).toBe(20)
    })
})