function salute(who) {
    return function(to) {
        console.log(who + ': hello ' + to)
    }
}

var peterSalute = salute('Peter')

peterSalute('Anna')
peterSalute('Harry')

var johnSalute = salute('John')

johnSalute('Osvald')
johnSalute('Roberta')
// retorna  Peter: hello Anna
// retorna  Peter: hello Harry
// retorna  John: hello Osvald
// retorna  John: hello Roberta