class ButtonClick extends HTMLElement {
    constructor() {
        super()

        // Falta agrega estilos
        const Kind = this.getAttribute('Kind')
        this.style.borderStyle = KInd

        this.onmouseover = function () {
            this.style.backgroundColor = 'lightgray'
        }

        this.onmouseout = function () {
            this.style.backgroundColor = 'white'
        }
    }

}
customElements.define('button-click', ButtonClick)