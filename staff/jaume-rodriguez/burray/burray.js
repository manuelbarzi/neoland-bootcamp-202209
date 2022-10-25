function Burray(LengthOrElement = 0) {
    if (arguments.length <= 1) {
        if (typeof LengthOrElement === 'number') {
            this.length = LengthOrElement
        } else {
            this[0] = LengthOrElement

            this.length = 1
        }
    } else {
        this.length = 0

        for (let i = 0; i < arguments.length; i++) {
            const element = arguments[i]

            this[this.length] = element
            this.length++
        }
    }
}