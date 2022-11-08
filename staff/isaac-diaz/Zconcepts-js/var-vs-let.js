// var

var limit = 10

for (var i = 0; i < limit; i++) {
    var value = i * 10

    console.log(value)
}
    
VM12767:6 0
VM12767:6 10
VM12767:6 20
VM12767:6 30
VM12767:6 40
VM12767:6 50
VM12767:6 60
VM12767:6 70
VM12767:6 80
VM12767:6 90
undefined
limit
10
i
10
value
90

// let

let limit = 10

for (let i = 0; i < limit; i++) {
    let value = i * 10

    console.log(value)
}
    
VM13036:6 0
VM13036:6 10
VM13036:6 20
VM13036:6 30
VM13036:6 40
VM13036:6 50
VM13036:6 60
VM13036:6 70
VM13036:6 80
VM13036:6 90
undefined
limit
10
i
VM13077:1 Uncaught ReferenceError: i is not defined
    at <anonymous>:1:1
(anonymous) @ VM13077:1
value
VM13090:1 Uncaught ReferenceError: value is not defined
    at <anonymous>:1:1

// var

{
    var a = 1
}

console.log(a)
VM13409:5 1
undefined
a
1

// let

{
    let a = 1
}

console.log(a)
VM13634:5 Uncaught ReferenceError: a is not defined
    at <anonymous>:5:13

// var

var a = 1

console.log(a)

var a = 2

console.log(a)
VM14188:3 1
VM14188:7 2
undefined

// let

let a = 1

console.log(a)

let a = 2

console.log(a)
VM14393:5 Uncaught SyntaxError: Identifier 'a' has already been declared