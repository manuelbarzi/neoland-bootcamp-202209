class HTMLUpperCaseElement extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerText = this.innerText.toUpperCase()
    }
}

customElements.define('upper-case', HTMLUpperCaseElement);

var t = document.createElement('upper-case')
t.innerText = 'hola mundo'

// document.body.append(t)

class HTMLLowerCaseElement extends HTMLElement {
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerText = this.innerText.toLowerCase()
    }
}

customElements.define('lower-case', HTMLLowerCaseElement);

let lc= document.createElement('lower-case')
lc.innerText = 'HOLA MUNDO'

document.body.append(lc)