class Boom extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback(){
        this.innerText = `Boom, ${this.innerText || 'Bang!'}!`
    }
}
customElements.define('Bo-om', Boom)