class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

/**
 * Shape (has-a Point)
*/
class Shape {
    constructor() {
        this.position = new Point(0, 0)

        const element = document.createElement('div')
        element.style.position = 'absolute'

        this.container = element
    }

    move(x, y) {
        this.position.x = x
        this.position.y = y
    }

    render() {
        this.container.style.bottom = this.position.y + 'px'
        this.container.style.left = this.position.x + 'px'

        document.body.append(this.container)
    }
}

/**
 * Emoji (is-a Shape)
 */
class Emoji extends Shape {
    constructor(icon) {
        super()

        this.icon = icon
    }

    eat() {
        return this.icon + '🍔'
    }

    render() {
        this.container.innerText = this.icon

        super.render()
    }
}

const crazy = new Emoji('🤪')
crazy.move(100, 100)
crazy.render()

const clown = new Emoji('🤡')
clown.move(50, 50)
clown.render()

const baloon = new Emoji('🎈')

/*
setInterval(() => {
    crazy,move(100, crazy position.y +10)

    clown.move(100, crazy position.y - 30 + 10 * Math.random())

    baloon.move(120, crazy.position.y - 30 + 10 * Math.random())

    crazy.render()
    clown.render()
    baloon.render()
}, 300)
*/

document.onkeydown = function (event) {
    const key = event.key

    if (key === 'ArrowUp')
        crazy.move(crazy.position.x, crazy.position.y + 10)
    else if (key === 'ArrowDown')
        crazy.move(crazy.position.x, crazy.position.y - 10)
    else if (key === 'ArrowLeft')
        crazy.move(crazy.position.x - 10, crazy.position.y)
    else if (key === 'ArrowRight')
        crazy.move(crazy.position.x + 10, crazy.position.y)
    else if (key === 'w')
        clown.move(clown.position.x, clown.position.y + 10)
    else if (key === 's')
        clown.move(clown.position.x, clown.position.y - 10)
    else if (key === 'a')
        clown.move(clown.position.x - 10, clown.position.y)
    else if (key === 'd')
        clown.move(clown.position.x + 10, clown.position.y)


    crazy.render()
    clown.render()

    if (crazy.position.x === clown.position.x && crazy.position.y === clown.position.y)
        alert('game over')
}