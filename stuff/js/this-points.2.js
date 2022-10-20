var p = { x: -5, y: -10 }

function getDistanceTo(p) {
    var dx = p.x - this.x
    var dy = p.y - this.y

    var dist = Math.sqrt(dx ** 2 + dy ** 2)
    
    return dist
}

p.getDistanceTo = getDistanceTo

var qs = [
    { x: 14.5, y: 7.5 },
    { x: 6.5, y: 12 },
    { x: 9, y: 11 }
]

// what is the smaller distance to p?

var ds = qs.map(function(q) {
    return p.getDistanceTo(q)
})

// [n?, n?, n?]

var dmin = Math.min(...ds)

console.log(dmin)

// what is the closest q to p?

var index = ds.findIndex(function(d) { 
    return d === dmin 
})

var qmin = qs[index]

console.log(qmin)


VM10983:31 24.82438317461282
VM10983:41 {x: 6.5, y: 12}
undefined