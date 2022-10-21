var p = { x: -5, y: -10 }

function getDistanceTo(p) {
    var dx = p.x - this.x
    var dy = p.y - this.y

    var dist = Math.sqrt(dx ** 2 + dy ** 2)
    
    return dist
}

var q = { x: 10, y: 10 }

p.getDistanceTo = getDistanceTo

console.log(p.getDistanceTo(q))



// VM7906:16 25
// undefined
// p
// {x: -5, y: -10, getDistanceTo: ƒ}
// q
// {x: 10, y: 10}