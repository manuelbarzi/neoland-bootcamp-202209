function person(name, util) {
    this.name = name
    this.util = util
}

person.prototype.wash = function() {
    return this.name + ' clean the floor with ' + this.util 
}

person.prototype.throw = function() {
    return this.name + ' throw me your ' + this.util
}

person.prototype.look = function() {
    return this.name + ' look my ' + mom.name + this.util 
}

var I = new person('I', 'broom')
var mom = new person('Mom', 'shoe')
var dad = new person('Dad', ' chikened out')

console.log(I.wash())
console.log(mom.throw(I))
console.log(dad.look(mom))
