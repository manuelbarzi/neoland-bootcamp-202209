function Point(x, y) {
    this.x = x
    this.y = y
}

// no need! it's automatic for the first function
//Point.prototype = Object.create(Object.prototype)
//Point.prototype.constructor = Point

/**
 * Shape (has-a Point)
 */    
function Shape() {
    this.position = new Point(0, 0)
    
    const element = document.createElement('div')
    element.style.position = 'absolute'

    this.container = element
}

// no need! it's automatic for the first function
//Shape.prototype = Object.create(Object.prototype)
//Shape.prototype.constructor = Shape

Shape.prototype.move = function(x, y) {
    this.position.x = x
    this.position.y = y
}

Shape.prototype.render = function() {
    this.container.style.bottom = this.position.y + 'px'
    this.container.style.left = this.position.x + 'px'
    
    document.body.append(this.container)
}

/**
 * Emoji (is-a Shape)
 */
function Emoji(icon) {
    Shape.call(this)
    
    this.icon = icon
}

// needed! from the second function in the prototype chain
Emoji.prototype = Object.create(Shape.prototype)
Emoji.prototype.constructor = Emoji

Emoji.prototype.eat = function() {
    return this.icon + '🍔'
}

Emoji.prototype.render = function() {
    this.container.innerText = this.icon

    //Shape.prototype.render.call(this)
    // or
    Shape.prototype.render.apply(this)
}


var crazy = new Emoji('🤪')
crazy.move(100, 100)
crazy.render()

var clown = new Emoji('🤡')
clown.move(50, 50)
clown.render()

var baloon = new Emoji('🎈')

/*
setInterval(() => {
    crazy.move(100, crazy.position.y + 10)  

    clown.move(100, crazy.position.y - 30 + 10 * Math.random())

    baloon.move(120, crazy.position.y - 30 + 10 * Math.random())

    crazy.render()
    clown.render()
    baloon.render()
}, 300)
*/

document.onkeydown = function(event) {
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