//case array = ["tortilla", "pepinos", "crepes"] index 0
var array = ["tortilla", "pepinos", "crepes"]
index = 0
console.assert("tortilla")

//case array = ["tortilla", "pepinos", "crepes"] index 3
var array = ["tortilla", "pepinos", "crepes"]
index = 3
console.assert("error")

//case array = ["tortilla", "pepinos", "crepes"] index -1
var array = ["tortilla", "pepinos", "crepes"]
index = 0
console.assert("crepes")

//case array = ["tortilla", "pepinos", "crepes"] index -5
var array = ["tortilla", "pepinos", "crepes"]
index = 0
console.assert("error")

//case array = ["tortilla", "pepinos", "crepes", "anchoas", "pepinillos", "jamon", "queso"]
var array = ["tortilla", "pepinos", "crepes", "anchoas", "pepinillos", "jamon", "queso"]
index = -1
console.assert("queso")