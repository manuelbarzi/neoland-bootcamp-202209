var p = { x: -5, y: -10, getDistanceTo: function(p) {
    var dx = p.x - this.x
    var dy = p.y - this.y

    var dist = Math.sqrt(dx ** 2 + dy ** 2)
    
    return dist
} }
undefined
p
{x: -5, y: -10, getDistanceTo: ƒ}
var q = { x: 10, y: 10, getDistanceTo: function(p) {
    var dx = p.x - this.x
    var dy = p.y - this.y

    var dist = Math.sqrt(dx ** 2 + dy ** 2)
    
    return dist
} }
undefined
p.getDistanceTo(q)
25
q.getDistanceTo(p)
25
p.getDistanceTo === q.getDistanceTo
false