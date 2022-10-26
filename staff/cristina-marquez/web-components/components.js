class Animals extends HTMLElement {
    constructor() {
        super()


    }
}

class MyCheese extends Animals {
    constructor() {
        super()

        this.innerText = '🧀'
    }
}

customElements.define('my-cheese', MyCheese)

class MyMouse extends Animals {
    constructor() {
        super()

        this.innerText = '🐭'
    }
}

customElements.define('my-mouse', MyMouse)