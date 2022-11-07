class HTMLBackground extends HTMLElement {
    constructor() {
        super()

        this.style.backgroundColor = 'gray';
    }

}

customElements.define('color-fondo', HTMLBackground);


