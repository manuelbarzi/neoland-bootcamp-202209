function Point(x, y) {
    this.x = x
    this.y = y
}

Point.prototype.getDistanceTo = function(p) {
    var dx = p.x - this.x
    var dy = p.y - this.y

    var dist = Math.sqrt(dx ** 2 + dy ** 2)
    
    return dist
}

var p = new Point(-10, -5)
var q = new Point(10, 10)

console.log(p.getDistanceTo(q))
console.log(q.getDistanceTo(p))

console.log(p.getDistanceTo === q.getDistanceTo)




VM14157:18 25
VM14157:19 25
VM14157:21 true
undefined
p.getDistanceTo
ƒ (p) {
    var dx = p.x - this.x
    var dy = p.y - this.y

    var dist = Math.sqrt(dx ** 2 + dy ** 2)
    
    return dist
}
q.getDistanceTo
ƒ (p) {
    var dx = p.x - this.x
    var dy = p.y - this.y

    var dist = Math.sqrt(dx ** 2 + dy ** 2)
    
    return dist
}