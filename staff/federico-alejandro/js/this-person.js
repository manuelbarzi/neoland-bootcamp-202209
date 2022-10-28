var person = {}

person.name = 'Peter'

person.salute = function(to) {
    console.log(person.name + ': hello ' + to) 
}

person.salute('John') // Peter: hello John


// 2

var person = {}

person.name = 'Peter'

person.salute = function(to) {
    console.log(this.name + ': hello ' + to) 
}


person.salute('John') // Peter: hello John

// 3

person.name = 'Mary'
'Mary'
person.salute('Andy') // Mary: hello Andy

var peter = {
 name: 'Peter',
 salute : to  => console.log(this.name + ': hello ' + to)
}
//en funcion flecha el this no apunta al objeto peter, sino al que esta afuera (window)
