// class Point {
//     constructor(x, y) {
//         this.x = x
//         this.y = y
//     }
// }

// class Shape {
//     constructor() {
//         this.position = new Point(0, 0)

//         const element = document.createElement('div')
//         element.style.position = 'absolute'

//         this.container = element
//     }

//     move (x, y) {
//         this.position.x = x
//         this.position.y = y
//     }

//     render() {
//         this.container.style.bottom = this.position.y + 'px'
//         this.container.style.left = this.position.x + 'px'

//         document.body.append(this.container)
//     }
// }

// class Emoji extends Shape {
//     constructor(icon) {
//         super()

//         this.icon = icon
//     }

//     render() {
//         this.container.innerText = this.icon

//         super.render
//     }

// }

// const racket1 = new Emoji('🏸')
// racket1.move(100,100)
// racket1.render()

// const racket2 = new Emoji('🎾')
// racket2.move(50,50)
// racket2.render()


class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

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

class Emoji extends Shape {
    constructor(icon) {
        super()

        this.icon = icon
    }

    render() {
        this.container.innerText = this.icon

        super.render()
    }
}

const crazy = new Emoji('🏸')
crazy.move(500, 10)
crazy.render()

const clown = new Emoji('🎾')
clown.move(10, 10)
clown.render()


const baloon = new Emoji('🎈')

setInterval(() => {
    baloon.move(+100 +800 * Math.random(),  500)
    baloon.render()
}, 300)


document.onkeydown = function (event) {
    const key = event.key

    if (key === 'ArrowLeft')
        crazy.move(crazy.position.x - 10, crazy.position.y)
    else if (key === 'ArrowRight')
        crazy.move(crazy.position.x + 10, crazy.position.y)
    else if (key === 'a')
        clown.move(clown.position.x - 10, clown.position.y)
    else if (key === 'd')
        clown.move(clown.position.x + 10, clown.position.y)


    crazy.render()
    clown.render()

    // if (crazy.position.x === clown.position.x && crazy.position.y === clown.position.y)
    //     alert('game over')
}






