function Burray(lengthOrElement = 0) {
    if(arguments.length <= 1){
    if (typeof lengthOrElement === 'number'){
        this.length = lengthOrElement
    } else {
        this[0] = lengthOrElement 
        this.length = 1
    }
    }else{
        this.length = 0

        for (let i = 0; i < arguments.length; i++){
            const element = arguments[i]
        
            this[this.length] = element

            this.length++
        }
    }
}
