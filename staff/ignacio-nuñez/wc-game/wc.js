class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Area {
    constructor(point, width, height) {
        this.x = [point.x - width/2, point.x + width/2]
        this.y = [point.y - height/2, point.y + height/2]
    }
}

class Shape {
    constructor(width = 40, height = 40) {
        this.position = new Point(0, 0)
        this.area = new Area(this.position, width, height)
        this.width = width
        this.height = height

        const element = document.createElement('div')
        element.style.position = 'absolute'

        this.container = element
    }
    render() {
        this.container.style.bottom = this.position.y + 'px'
        this.container.style.left = this.position.x + 'px'

        document.body.append(this.container)
    }
    move(x, y) {
        this.position.x = x
        this.position.y = y
        this.area.x = [x - this.width, x + this.width]
        this.area.y = [y - this.height, y + this.height]
    }
    makeBig(size) {
        this.container.style.fontSize = size + 'px'
    }
}


class Character extends Shape {
    constructor(icon, width, height) {
        super(width, height)

        this.icon = icon
    }
    render() {
        this.container.innerText = this.icon

        super.render()
    }
}

const vater = new Character('🚽')
// const caca = new Character('💩', 15, 15)


vater.move(200, 0)
vater.render()
vater.makeBig(50)

const vaterKey = {}

document.onkeydown = function (event) {
    const key = event.key
    switch (key) {
        case 'd':
            if (!(vaterKey.d))
                vaterIntervalId = setInterval(() => {
                    vater.move(vater.position.x+2, 0)

                    vaterKey.d = true
                    vater.render()
                }, 2)
            break

        case 'a':
            if (!(vaterKey.a))
                vaterIntervalId2 = setInterval(() => {
                    vater.move(vater.position.x - 2, 0)

                    vaterKey.a = true
                    vater.render()
                }, 2)
    }
}

document.onkeyup = function (event) {
    const key = event.key
    switch (key) {
        case 'd': clearInterval(vaterIntervalId)
            vaterKey.d = false
            break

        case 'a': clearInterval(vaterIntervalId2)
            vaterKey.a = false
    }
}



function hasElementsTouchEachOther(area1, area2) { 
}


let lluviaCacaIntervalId = setInterval(() =>{
    const randomX = Math.random() * 600
    var pooRain = new Character('💩')
    pooRain.move(randomX, 400)
    pooRain.render()

    let pooRainIntervalId = setInterval(() => {
        
        pooRain.move(randomX, pooRain.position.y-2)
        pooRain.render()
        if ((pooRain.position.y < vater.position.y + 40 && pooRain.position.y > vater.position.y - 40) &&
            (pooRain.position.x < vater.position.x + 40 && pooRain.position.x > vater.position.x - 40)) {
            pooRain.container.remove()
            clearInterval(pooRainIntervalId)
        }
    }, 2)
}, 3000)


