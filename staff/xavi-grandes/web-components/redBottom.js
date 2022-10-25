class RedButton extends HTMLElement {
    constructor() {
        super()

        this.style.border = '1px solid black'
        this.style.backgroundColor = '#FF6161'
        this.style.padding = '10px'
        this.style.cursor = 'pointer'
        this.style.borderRadius = '10px'
        
        this.onmouseover = function() {
            this.style.backgroundColor = '#FF4B4B'
        }

        this.onmouseout = function () {
            this.style.backgroundColor = '#FF6161'
        }
    }
}

customElements.define('red-button', RedButton)