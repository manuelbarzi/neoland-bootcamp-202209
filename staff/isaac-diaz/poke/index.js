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

    talk() {
        console.log(`${hash} + ${nombre}`)
    }

    // accion() {
    //     this.accion.attack('pokemon')
    //     this.accion.take('object')
    //     this.accion.event()

    // }

    render() {
        this.container.style.top = this.position.y + 'px'
        this.container.style.left = this.position.x + 'px'

        document.body.append(this.container)
    }
}





document.onkeydown = function (event) {
    const key = event.key

    if (key === 'ArrowUp')
        char.move(char.position.x, char.position.y - 10)
    else if (key === 'ArrowDown')
        char.move(char.position.x, char.position.y + 10)
    else if (key === 'ArrowLeft')
        char.move(char.position.x - 10, char.position.y)
    else if (key === 'ArrowRight')
        char.move(char.position.x + 10, char.position.y)
    else if (key === 'w')
        bulba.move(bulba.position.x, bulba.position.y - 10)
    else if (key === 's')
        bulba.move(bulba.position.x, bulba.position.y + 10)
    else if (key === 'a')
        bulba.move(bulba.position.x - 10, bulba.position.y)
    else if (key === 'd')
        bulba.move(bulba.position.x + 10, bulba.position.y)
    else if (key === 'i')
        squirt.move(squirt.position.x, squirt.position.y - 10)
    else if (key === 'k')
        squirt.move(squirt.position.x, squirt.position.y + 10)
    else if (key === 'j')
        squirt.move(squirt.position.x - 10, squirt.position.y)
    else if (key === 'l')
        squirt.move(squirt.position.x + 10, squirt.position.y)


    char.render()
    bulba.render()
    squirt.render()
    pp.render()
    // potion.render()

    //Solo funciona el ultimo caso, creo que se pisan
    if (
        (char.position.x === bulba.position.x && char.position.y === bulba.position.y) ||
        (squirt.position.x === bulba.position.x && squirt.position.y === bulba.position.y) ||
        (char.position.x === squirt.position.x && char.position.y === squirt.position.y)
    )
        alert('game over')
}

