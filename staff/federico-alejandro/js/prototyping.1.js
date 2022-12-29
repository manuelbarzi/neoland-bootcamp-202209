var person = {}

person.name = 'Oscar'

person.salute = function (to) {
    console.log(person.name +  ': hola' + to )
    }

person.salute(' Marta')
  //////////
person = {}

person.name = 'Ale'

person.salute = function(to) {
    console.log(this.name + ': hola' + to)
}
person.salute(' Oscar')
      /////
function Person(name, age, gender){
    this.name = name
    this.age = age
    this.gender = gender
}
Person.prototype.eat = function() {
    return this.name + ' pasta'
}

Person.prototype.gender = function() {
    return this.name + this.gender + ' male'
}
var Mario = new Person ('Mario', '23', 'male')
var luigi = new Person ('Luigi', '30', 'male')

console.log(luigi.eat())
console.log(Mario.gender())