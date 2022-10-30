class BRAETHORP {
    constructor() {
        this.name = "BRAETHORP"
        this.healthPoints = 80
        this.especialDefense = 15
        this.fisicDefense = 33
        this.especialAtack = 60
        this.fisicAtack = 53
        this.psiquicalAtack = 23
        this.speed = 90
        this.healing = 27
        this.repeat = 10
        this.type = 'Electric'
        this.atack1 = 'High Voltatge'
        this.atack2 = 'Paralizer'
        this.atack3 = 'Puño Agua'
        this.atack4 = 'Rugido Del Dragón'

        this.passiveEfect = false
        this.paralyzed = false
    }

    atackA(alienAtack, alienDefense) {
        log('DEBUG-LOGIC', 'atackA(BattlePage.jsx)', 'electric.js')
        highVoltatge(alienAtack, alienDefense)
    }

    atackB(alienAtack, alienDefense) {
        log('DEBUG-LOGIC', 'atackB working', 'electric.js')
        paralyzerAtack(alienAtack, alienDefense)
    }

    atackC() {
        log('DEBUG-LOGIC', 'atackC working', 'electric.js')
        puñoAgua(this.name)
    }

    atackD() {
        log('DEBUG-LOGIC', 'atackD working', 'electric.js')
        rugidoDelDragon(this.name)
    }

    updateHealth(value) {
        log('DEBUG-LOGIC', 'updateHealth() enter', 'electric.js')
        return this.healthPoints = value
    }

}

class DELETEMAN {
    constructor() {
        this.name = "DELETEMAN"
        this.healthPoints = 80
        this.especialDefense = 15
        this.fisicDefense = 33
        this.especialAtack = 60
        this.fisicAtack = 53
        this.psiquicalAtack = 23
        this.speed = 90
        this.healing = 27
        this.repeat = 10
        this.type = 'Electric'
        this.atack1 = 'Alto Voltage'
        this.atack2 = 'pito'
        this.atack3 = 'Pato'
        this.atack4 = 'poto'

        this.passiveEfect = false
        this.paralyzed = false
    }

    atackA(alienAtack, alienDefense) {
        log('DEBUG-LOGIC', 'atackA working', 'electric.js')
        highVoltatge(alienAtack, alienDefense)
    }

    atackB() {
        log('DEBUG-LOGIC', 'atackB working', 'electric.js')
        paralyzerAtack(this.name)
    }

    atackC() {
        log('DEBUG-LOGIC', 'atackC working', 'electric.js')
        puñoAgua(this.name)
    }

    atackD() {
        log('DEBUG-LOGIC', 'atackD working', 'electric.js')
        rugidoDelDragon(this.name)
    }

    updateHealth(value) {
        log('DEBUG-LOGIC', 'updateHealth() enter', 'electric.js')
        return this.healthPoints = value
    }

}

