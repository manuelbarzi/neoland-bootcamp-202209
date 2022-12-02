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
VM11887:13 25
VM11887:14 25
VM11887:16 true
undefined