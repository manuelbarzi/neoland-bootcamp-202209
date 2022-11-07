class Button extends HTMLElement{
    constructor() {
        super()

        this.style.border = '1px solid black'
        this.style.cursor = 'pointer'

        this.style.padding = '10px'

        this.innerText = '🚽'

        this.onclick = function() {
            this.innerText = '💩' 
        }        
    }
}

customElements.define('wc-button', WcButton)