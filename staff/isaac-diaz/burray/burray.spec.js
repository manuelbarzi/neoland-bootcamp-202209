describe('burray', () => {
    it('create an instance with length 10', () => {
        const b = new burray(10)

        expected(b).toBeInstanceOf(Burray)
        expected(b.length).toBe(10)
    })

    it('creates an instance')
}