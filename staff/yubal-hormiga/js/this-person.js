var person = {}

person.name = 'Peter'

person.salute = function(to) {
    console.log(person.name + ': hello ' + to) 
}

person.salute('John')
// VM5639:6 Peter: hello John
undefined

// 2

var person = {}

person.name = 'Peter'

person.salute = function(to) {
    console.log(this.name + ': hello ' + to) 
}

person.salute('John')
// VM5681:6 Peter: hello John

// 3

person.name = 'Mary'
'Mary'
person.salute('Andy')
// VM5681:6 Mary: hello Andy