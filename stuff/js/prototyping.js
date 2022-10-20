function Person(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
}

Person.prototype.eat = function() {
    return this.name + ': 🍔'
}

Person.prototype.love = function(person) {
    return this.name + ': 💘 ' + person.name
}



var peter = new Person('Peter Pan', 15, 'male')
var wendy = new Person('Wendy Darling', 14, 'female')


console.log(peter.eat())
console.log(wendy.eat())
console.log(peter.love(wendy))
VM16343:21 Peter Pan: 🍔
VM16343:22 Wendy Darling: 🍔
VM16343:23 Peter Pan: 💘 Wendy Darling
undefined