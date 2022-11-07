class Item extends Shape {
    constructor(icon) {
        super()

        this.icon = icon
    }

    render() {
        this.container.innerText = this.icon

        super.render()
    }

    // effect() {

    // }    
    
}

// const mochila = new Object('')
// mochila.name = 'mochila'
// mochila.space = (50, huecos)

const potion = new Item('🧪')
potion.name = 'poti'
// potion.hueco = 1
// potion.effect = (100, pts)
potion.move(520, 250)
// potion.buy.value = (100, coins)
// potion.sell.value = (30, coins)

// const superpotion = new Object('')
// potion.name = 'superpoti'
// potion.hueco = 1
// potion.effect = (500, pts)
// potion.move(470, 350)
// potion.buy.value = (300, coins)
// potion.sell.value = (100, coins)

// const pokeballs = new Object ('')
// potion.name = 'pokeball'
// potion.hueco = 1
// potion.effect = (capture)
// potion.move(640, 250)
// potion.buy.value = (100, coins)
// potion.sell.value = (50, coins)

// const antidot = new Object('')
// potion.name = 'antidot'
// potion.hueco = 1
// potion.effect = ()
// potion.move(520, 550)
// potion.buy.value = (100, coins)
// potion.sell.value = (50, coins)