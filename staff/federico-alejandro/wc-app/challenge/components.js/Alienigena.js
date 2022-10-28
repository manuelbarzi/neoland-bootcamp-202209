class Alienigena extends HTMLElement {
    constructor() {
        super()

        this.innerText = '👽'
    }
}
customElements.define('Alien-igena', Alienigena)
document.body.append(Alienigena)