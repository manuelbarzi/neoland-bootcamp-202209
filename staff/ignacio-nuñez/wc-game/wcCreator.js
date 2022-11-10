class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Area {
    constructor(point, width, height) {
        this.x = [point.x - width / 2, point.x + width / 2]
        this.y = [point.y, point.y + height]
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
    newPosition(x, y) {
        this.position.x = x
        this.position.y = y
        this.area.x = [x - this.width / 2, x + this.width / 2]
        this.area.y = [y, y + this.height]
    }
    move(x = 0, y = 0) {
        this.position.x = this.position.x + x
        this.position.y = this.position.y + y
        this.area.x = [this.position.x - this.width / 2, this.position.x + this.width / 2]
        this.area.y = [this.position.y, this.position.y + this.height]
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
        // this.container.className = "pooRain"
        super.render()
    }
}

const vater = new Character('🚽', 40, 40)

vater.newPosition(313, 0)
vater.render()
vater.makeBig(50)