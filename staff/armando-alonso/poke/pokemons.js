class Pokemon extends Shape {
    constructor(icon, name) {
        super()
        // this.life = 5
        this.name = name
        this.icon = icon
    }

    render() {
        this.container.src = this.icon
        
        super.render()
    }
    
    // status(level > 10) {
    //     live = (level * 10)
    //     level = 6
    //     attack = (level * 2)
    //     // exp = ??

     // status(level < 10 && level > 20) {
    //     live = (level * 15)
    //     level = 6
    //     attack = (level * 2.5)
    //     // exp = ??

    // }
    
    // accion.attack() {
        //normal.attack
        //flameTrower.attack
        // }

}

// class Fire extends Pokemon {
//     constructor()

//     flametrower(enemy) {
//         if (enemy instanceof Water) {
//             enemy.life -= 0.5
//         } else if (enemy instanceof Plant) {
//             enemy.life -= 2
//         } else {
//             enemy.life -= 1
//         }
//     } 
//     // super()
// }



// class Water extends Pokemon {
//     constructor()

//     flametrower(enemy) {
//         if (enemy instanceof Plant) {
//             enemy.life -= 0.5
//         } else if (enemy instanceof Fire) {
//             enemy.life -= 2
//         } else {
//             enemy.life -= 1
//         }
//     } 
//     // super()
// }



// class Plant extends Pokemon {
//     constructor()
//     flametrower(enemy) {
//         if (enemy instanceof Water) {
//             enemy.life -= 0.5
//         } else if (enemy instanceof Plant) {
//             enemy.life -= 2
//         } else {
//             enemy.life -= 1
//         }
//     } 
//        // super()
// }



const char = new Pokemon('https://i.pinimg.com/originals/f9/d2/0e/f9d20eaf4a178d5e721ac9dafa468633.png', 'Charmander')
// char.name = 'Charmander'
char.hash = 'char char'
// char.talk()
// char = instanceof Fire
char.move(250, 250)
char.render()
// char.talk() 
//     console.log(`${hash} + ${nombre}`)


const bulba = new Pokemon('https://www.pngplay.com/wp-content/uploads/10/Eevee-Pokemon-PNG-HD-Images.png', 'Bulbasur')
// bulba.name = 'bulbajuani'
bulba.hash = 'bulba bulba'
//bulba.talk()
// bulba = instanceof Plant
bulba.move(370, 100)
bulba.render()

const squirt = new Pokemon('https://assets.stickpng.com/images/580b57fcd9996e24bc43c32a.png', 'Squirtle')
// squirt.name = 'Squirtle'
squirt.hash = 'sqüero....'
//squirt.talk()
// squirt = instanceof Water
squirt.move(100, 100)
squirt.render()
