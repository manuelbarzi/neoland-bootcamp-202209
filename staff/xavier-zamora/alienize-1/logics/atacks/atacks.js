function altoVoltage(atackAlien, defenseAlien) {
    if(typeof atackAlien != 'object' || typeof defenseAlien != 'object')
    throw new TypeError(log('ERROR', '1-altoVoltage() values are not object', 'data/atacks/atacks.js -> altoVoltage()'))

    log('DEBUG-LOGIC', 'altoVoltage()', 'data/atacks/atacks.js')
    console.log(atackAlien.name + " " + "ha usado alto voltage")
    const damageDeal = atackAlien.especialAtack - defenseAlien.especialDefense
    const res = defenseAlien.healthPoints - damageDeal
    console.log(atackAlien.name + " " + "ha inflingido" + " " + damageDeal + " " + "de daño")
    defenseAlien.updateHealth(res)
    return res
}

function paralizador(name) {
    log('DEBUG-LOGIC', 'paralizador()', 'data/atacks/atacks.js')
    console.log(name + " " + "ha usado paralizador")
}

function puñoAgua(name) {
    log('DEBUG-LOGIC', 'puñoAgua()', 'data/atacks/atacks.js')
    console.log(name + ' ' + 'ha usado puño agua')
}

function rugidoDelDragon(name) {
    log('DEBUG-LOGIC', 'rugidoDelDragon()', 'data/atacks/atacks.js')
    console.log(name + ' ' + 'ha usado puño del dragón')
}