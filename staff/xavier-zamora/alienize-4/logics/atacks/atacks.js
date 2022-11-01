function highVoltatge(atackAlien, defenseAlien) {
    if(typeof atackAlien != 'object' || typeof defenseAlien != 'object')
    throw new TypeError(log('ERROR', 'highVoltatge(pages/BattlePage.jsx) values are not object', 'data/atacks/atacks.js -> highVoltatge()'))

    log('DEBUG-LOGIC', 'highVoltatge()', 'data/atacks/atacks.js')
    console.log(atackAlien.name + " " + "use High Voltatge")
    const damageDeal = atackAlien.especialAtack - defenseAlien.especialDefense
    const res = defenseAlien.healthPoints - damageDeal
    console.log(atackAlien.name + " " + "do" + " " + damageDeal + " " + "of damage")
    defenseAlien.updateHealth(res)
    return res
}

function paralyzerAtack(atackAlien, defenseAlien) {
    if(typeof atackAlien != 'object' || typeof defenseAlien != 'object')
    throw new TypeError(log('ERROR', 'highVoltatge(pages/BattlePage.jsx) values are not object', 'data/atacks/atacks.js -> highVoltatge()'))

    log('DEBUG-LOGIC', 'paralizador()', 'data/atacks/atacks.js')
    if(defenseAlien.paralyzed === false){
    console.log(atackAlien.name + ' ' + "use paralyzer")
    defenseAlien.passiveEfect = true
    defenseAlien.paralyzed = true
    return true}
    const randomValue = Math.floor(Math.random() * 4)
    if(randomValue < 2){
        defenseAlien.passiveEfect = true
        defenseAlien.paralyzed = true
        if(hasTurn === false) hasTurn = true
        else hasTurn = false 
        console.log(defenseAlien.name + ' ' + 'has been paralyzed')
        return true
    }else{
        defenseAlien.passiveEfect = false
        defenseAlien.paralyzed = false
        console.log(defenseAlien.name + ' ' + 'is not paralyzed')
        return true
    }
    
}

function puñoAgua(name) {
    log('DEBUG-LOGIC', 'puñoAgua()', 'data/atacks/atacks.js')
    console.log(name + ' ' + 'ha usado puño agua')
}

function rugidoDelDragon(name) {
    log('DEBUG-LOGIC', 'rugidoDelDragon()', 'data/atacks/atacks.js')
    console.log(name + ' ' + 'ha usado puño del dragón')
}