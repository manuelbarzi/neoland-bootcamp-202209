var peter = {
    name: 'Peter',
    salute: function (to) {
        console.log(this.name + ': hello ' + to)
    }
}

peter.salute('Wendy')

var wendy = {
    name: 'Wendy',
    salute: peter.salute
}

wendy.salute('Peter')

window.name = 'Mr Window'

var peter = {
    name: 'Peter',
    //salute: to => console.log(this.name + ': hello ' + to)
    salute: function (to) {
        console.log(this.name + ': hello ' + to)
    }.bind(this)
}

peter.salute('Wendy')

var wendy = {
    name: 'Wendy',
    salute: peter.salute
}

wendy.salute('Peter')