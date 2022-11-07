describe('Burray.prototype.push', () => {
    it('pushes an element into instance', () => {
        const b = new Burray

        const length = b.push(100)

        expect(b.length).toBe(1)
        expect(b[0]).toBe(100)
        expect(length).toBe(1)
    })

    it('pushes an various elements into instance', () => {
        const b = new Burray

        const length = b.push(100, 200, 300, 400)

        expect(b.length).toBe(4)
        expect(b[0]).toBe(100)
        expect(b[1]).toBe(200)
        expect(b[2]).toBe(300)
        expect(b[3]).toBe(400)
        expect(length).toBe(4)
    })
})