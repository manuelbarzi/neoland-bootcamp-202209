class Burray {

    constructor(lengthOrElement = 0) {

        if (arguments.length <= 1) { 

            if (typeof lengthOrElement === 'number') 

                this.length = lengthOrElement

            else {

                this[0] = lengthOrElement

                this.length = 1
            }
        } else {

            
            this.length = arguments.length

            for (let i = 0; i < arguments.length; i++) {

                this[i] = arguments[i];
            }
        }
    }
}