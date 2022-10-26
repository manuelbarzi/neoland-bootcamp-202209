    //El at te devuelve la posicion de un string

//CASE whwn the index I want is 3 the function return 'i'

var string = 'manzana'

var index = 3

var result = at(string, index)

console.assert(result === z)

//CASE when the index is negative 

var string = 'charmeleon'

var index = -6

var result = at(string, index)

console.assert(result === 'm')

//CASE when we don't indicate the number of the index in the function, it return index '0' by default

var string = 'comecocos'

//var index = 4

var result = at(string)

console.assert(result === 'c')

//CASE when we indicate number instaed of a string, the function return string and error

var string = 1567

var index = 3

try {
    var resultSpecial = at(string)
    } catch(error) {
        console.assert(error instanceof TypeError)
        console.assert(error.message === string + ' is not a string')
    }

//CASE when we indicate a string instaed of a index number, the function returns index '0'

var string = 'wendy'

var index = 't'

result2 =  at(string, index)

console.assert(result2 === 'w')













