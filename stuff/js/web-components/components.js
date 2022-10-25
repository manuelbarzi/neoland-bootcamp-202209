class HTMLUpperCaseElement extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() { // override
        //debugger
        //console.log('connected!')
        this.innerText = this.innerText.toUpperCase()
    }
}

customElements.define('upper-case', HTMLUpperCaseElement);