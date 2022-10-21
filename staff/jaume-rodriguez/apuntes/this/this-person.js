var person = {}

person.name = 'Peter'

person.salute = function (to) {
    console.log(person.name + ': hello ' + to)
}

person.salute('John')

// 2

var person = {}

person.name = 'Peter'

person.salute = function (to) {
    console.log(this.name + ': hello ' + to)
}

person.salute('John')

// 3

person.name = 'Mary'
'Mary'
person.salute('Andy')