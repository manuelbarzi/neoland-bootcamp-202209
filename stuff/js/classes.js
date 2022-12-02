function Person(name) {
    this.name = name
}

Person.prototype.salute = function(to) {
    return `${this.name}: Hello, ${to.name}!`
}

var wendy = new Person('Wendy')
var peter = new Person('Peter')

console.log(wendy.salute(peter))
console.log(peter.salute(wendy))
VM4937:12 Wendy: Hello, Peter!
VM4937:13 Peter: Hello, Wendy!
undefined

// with classes

class Person {
    constructor(name) {
        this.name = name
    }

    salute(to) {
        return `${this.name}: Hello, ${to.name}!`
    }
}

var wendy = new Person('Wendy')
var peter = new Person('Peter')

console.log(wendy.salute(peter))
console.log(peter.salute(wendy))
VM5156:14 Wendy: Hello, Peter!
VM5156:15 Peter: Hello, Wendy!