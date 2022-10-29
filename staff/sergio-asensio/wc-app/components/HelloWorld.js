class HelloWorld extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerText = `Hello, ${this.innerText || 'World'}!`
    }
}

customElements.define('hello-world', HelloWorld);