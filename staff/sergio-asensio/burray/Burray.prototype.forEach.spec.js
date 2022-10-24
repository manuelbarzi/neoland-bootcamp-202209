describe('Burray.prototype.forEach', () => {
    it(' add all numbers into a result', () => {
        const ns = new Burray(10, 20, 30, 40, 50)
        let r = 0

        const addToResult = n => {
            r += n
        }

        ns.forEach(addToResult)

        expect(r).toBe(150) 
    })

    it('multyply all numbers by 10 and accumulate into an arrat', () => {
        const ns = new Burray(10, 20, 30, 40, 50)
        const r = new Burray

        const mulBy10AndPushIntoResult = (n,i) => {
            r[i] =  n * 10
            r.length++
        }

        ns.forEach(mulBy10AndPushIntoResult)

        expect(r[0]).toBe(100)
        expect(r[1]).toBe(200)
        expect(r[2]).toBe(300)
        expect(r[3]).toBe(400)
        expect(r[4]).toBe(500)
    })

    it('concatenate all characters into a string', () => {
        const chars = new Burray('i', 'l', 'o', 'v', 'e', 'c', 'o', 'd', 'e', '&','t', 'd', 'd')
        let s = ''

        chars.forEach(function (char) {
            s += char
        })

        expect(s).toBe('ilovecode&tdd')
    })

    it('fails on no callback input', () => {
        const nums = new Burray(10, 20, 30)
        const print = num => console.log(num)

        let _error

        try{
            nums.forEach()
        } catch (error) {
            _error = error
        }

        expect(_error).toBeInstanceOf(TypeError)
        expect(_error.message).toBe('undefined is not a function')
    })
})