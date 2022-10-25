function Point(x, y) {
    this.x = x
    this.y = y
}

function Shape() {
    this.position = new Point(0, 0)
    const element = document.createElement('div')
    this.container = element

    element.style.position = 'absolute'
}

Shape.prototype.move = function (x, y) {
    this.position.x = x
    this.position.y = y
}

Shape.prototype.render = function () {
    this.container.style.bottom = this.position.y + 'px'
    this.container.style.left = this.position.x + 'px'

    document.body.append(this.container)
}

function Character(icon) {
    Shape.call(this)

    this.icon = icon
}
Character.prototype = Object.create(Shape.prototype)
Character.prototype.constructor = Character

Character.prototype.render = function () {
    this.container.innerText = this.icon

    Shape.prototype.render.call(this)
}
let tRex = new Character('🦖')
let human = new Character('🏃‍♀️')

tRex.move(50, 50)
tRex.render()

human.move(90, 90)
human.render()