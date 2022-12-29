class HTMLUpperCaseElement extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() { // override
        //debugger
        this.innerText = this.innerText.toUpperCase()
        this.innerText = this.innerText.toUpperCase()
        //this.style = this.style.backgroundColor()
        //this.style = this.style.fontSize()
        //this.style = this.style.color()
        //this.style = this.style.borderRadius()
        
    }
}

customElements.define('upper-case', HTMLUpperCaseElement);

// class HTMLBorderCaseElement extends HTMLElement {
//     constructor() {
//         super()
//     }
//     connectedCallback() {
//         this.style = this.style.background-color
//     }
// }