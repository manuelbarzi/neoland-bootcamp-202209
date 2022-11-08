class Shape {
    // let position = Point
    // let container
    constructor() {
        this.position = new Point(0, 0)

        this.container = document.createElement('div')
        this.container.style.position = 'absolute'
    }
    move(x, y) {
        this.position.x = x;
        this.position.y = y;
    }
}