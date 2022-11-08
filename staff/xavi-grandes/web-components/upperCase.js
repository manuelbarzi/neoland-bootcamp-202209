class HTMLUpperCaseElement extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback () {
        this.innerText = this.innerText.toUpperCase()
    }
}

customElements.define('upper-case', HTMLUpperCaseElement);