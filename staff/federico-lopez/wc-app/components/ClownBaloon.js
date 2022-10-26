class ClownBaloon extends HTMLElement {
    constructor() {
        super()

        this.innerText = '🎈🤡'
    }
}

customElements.define('clown-baloon', ClownBaloon)