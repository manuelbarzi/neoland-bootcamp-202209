class Human extends Shape {
    constructor(icon) {
        super()

        this.icon = icon
    }

    render() {
        this.container.innerText = this.icon

        super.render()
    }

    // talk() {
    //     console.log(`'Me llamo ' ${nombre} + '. ' ${hash}`)
    // }

    // accion() {
        //Take
        //Talk

    // }
}

const pp = new Human('🌞')
pp.name = 'Mostaza'
pp.hash = 'Yo no me llamo Pepe'
//pp.talk()
pp.move(500, 300)
pp.render()

const npc = new Human('🌙')
npc.name = 'Anselmo'
npc.hash = 'El cazabichos preferido de tu cazabichos preferido'
//npc.talk()
npc.move(600, 350)
npc.render()

// const profesor = new Human('')
// profesor.name = 'kao'
// profesor.hash = 'seras el mejor coder musol'
// profesor.move(125, 525)
// profesor.render()