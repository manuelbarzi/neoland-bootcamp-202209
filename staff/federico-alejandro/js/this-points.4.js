function getDistanceTo(p) {
    var dx = p.x - this.x
    var dy = p.y - this.y

    var dist = Math.sqrt(dx ** 2 + dy ** 2)
    
    return dist
}

var p = { x: -5, y: -10, getDistanceTo: getDistanceTo }
var q = { x: 10, y: 10, getDistanceTo: getDistanceTo }

console.log(p.getDistanceTo(q))
console.log(q.getDistanceTo(p))

console.log(p.getDistanceTo === q.getDistanceTo)
 25
 25
 true