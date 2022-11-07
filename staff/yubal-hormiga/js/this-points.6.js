function Point(x, y) {
    this.x = x
    this.y = y

    this.getDistanceTo = function(p) {
        var dx = p.x - this.x
        var dy = p.y - this.y
    
        var dist = Math.sqrt(dx ** 2 + dy ** 2)
        
        return dist
    }
}

// var p = { x: -5, y: -10, getDistanceTo: ?)
// var q = { x: 10, y: 10, getDistanceTo: ?)

var p = new Point(-10, -5)
var q = new Point(10, 10)

console.log(p.getDistanceTo(q))
console.log(q.getDistanceTo(p))

console.log(p.getDistanceTo === q.getDistanceTo)




// VM13676:21 25
// VM13676:22 25
// VM13676:24 false
// undefined