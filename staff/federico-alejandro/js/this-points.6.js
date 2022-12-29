function getDistanceTo(p) {
    var dx = p.x - this.x
    var dy = p.y - this.y

    var dist = Math.sqrt(dx ** 2 + dy ** 2)
    
    return dist
}

function Point(x, y) {
    this.x = x
    this.y = y

    this.getDistanceTo = getDistanceTo
}

var p = new Point(-10, -5)
var q = new Point(10, 10)

console.log(p.getDistanceTo(q))
console.log(q.getDistanceTo(p))

console.log(p.getDistanceTo === q.getDistanceTo)
/*20 25
21 25
23 true*/