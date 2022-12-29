class RoundedButton extends HTMLElement {
    constructor() {
        super()

        this.style.border = '5px solid black'
        this.style.borderRadius = '10px'
        this.style.padding = '5px'
        this.style.cursor = 'pointer'

        const kind = this.getAttribute('kind')
        this.style.borderStyle = kind
        this.innerText = '😛'

        this.onmouseover = function() {
            this.style.backgroundColor = 'lightgray'
        }

        this.onmouseout = function() {
            this.style.backgroundColor = 'white'
        }
    }
}

customElements.define('rounded-button', RoundedButton)