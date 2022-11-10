//case array = ["tortilla", "pepinos", "crepes"] index 0
debugger
var array = ["tortilla", "pepinos", "crepes"]
index = 0
var res = at(array, index)
console.assert(res === "tortilla")

//case array = ["tortilla", "pepinos", "crepes"] index 3
var array = ["tortilla", "pepinos", "crepes"]
index = 3
var res = at(array, index)
console.assert(res === "error")

//case array = ["tortilla", "pepinos", "crepes"] index -1
var array = ["tortilla", "pepinos", "crepes"]
index = -1
var res = at(array, index)
console.assert(res === "crepes")

//case array = ["tortilla", "pepinos", "crepes"] index -5
var array = ["tortilla", "pepinos", "crepes"]
index = -5
var res = at(array, index)
console.assert(res === "error")

//case array = ["tortilla", "pepinos", "crepes", "anchoas", "pepinillos", "jamon", "queso"]
var array = ["tortilla", "pepinos", "crepes", "anchoas", "pepinillos", "jamon", "queso"]
index = -1
var res = at(array, index)
console.assert(res === "queso")