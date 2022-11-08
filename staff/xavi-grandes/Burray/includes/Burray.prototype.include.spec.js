describe ('Burray.prototype.include', () => {
    it ('found if it is true that "cat" is inside Burray', () => {
        const b = new Burray ('cat', 'dog', 'bat', 'rat', 'fish', 'snake')
        searchElement = 'bat'
        callback = (element) => element === 'bat', 

        expect(b).toBeInstanceOf(Burray)
        expect().tobeTrue()
    })
})