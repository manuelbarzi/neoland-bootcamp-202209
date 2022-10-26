describe('Burray.prototype.push', () => {
    it('pushes an element into instance', () => {
        const b = new Burray

        const length = b.push(100)

        expect(b.length).toBe(1)
        expect(b[0]).toBe(100)
        expect(length).toBe(1)
    })

    it('pushes various elements into instance', () => {
        const b = new Burray

        const length = b.push(100, 200, 300)

        expect(b.length).toBe(3)
        expect(b[0]).toBe(100)
        expect(b[1]).toBe(200)
        expect(b[2]).toBe(300)
        expect(length).toBe(3)
    })

    // ...
})