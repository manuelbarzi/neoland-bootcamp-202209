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
VM925:3 Peter: hello Anna
VM925:3 Peter: hello Harry
VM925:3 John: hello Osvald
VM925:3 John: hello Roberta
undefined