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
        this.atack1 = 'Alto Voltage'
        this.atack2 = 'paralizador'
        this.atack3 = 'Puño Agua'
        this.atack4 = 'Rugido Del Dragón'
    }

    atackA(alienAtack, alienDefense) {
        log('DEBUG-LOGIC', 'atackA working', 'electric.js')
        altoVoltage(alienAtack, alienDefense)
    }

    atackB() {
        log('DEBUG-LOGIC', 'atackB working', 'electric.js')
        paralizador(this.name)
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
        this.atack2 = 'paralizador'
        this.atack3 = 'Puño Agua'
        this.atack4 = 'Rugido Del Dragón'
    }

    atackA(subject,  healthPoints, name, especialAtack, fisicAtack, psiquicalAtack, especialDefense, fisicDefense, speed, healing, repeat, atack1, atack2, atack3, atack4, target,  targetHealthPoints, targetName, targetEspecialAtack, targetFisicAtack, targetPsiquicalAtack, targetEspecialDefense, targetFisicDefense, targetSpeed, targetHealing, targetRepeat, targetAtack1, targetAtack2, targetAtack3, targetAtack4 ) {
        log('DEBUG-LOGIC', 'atackA working', 'electric.js')
        altoVoltage(subject,  healthPoints, name, especialAtack, fisicAtack, psiquicalAtack, especialDefense, fisicDefense, speed, healing, repeat, atack1, atack2, atack3, atack4, target,  targetHealthPoints, targetName, targetEspecialAtack, targetFisicAtack, targetPsiquicalAtack, targetEspecialDefense, targetFisicDefense, targetSpeed, targetHealing, targetRepeat, targetAtack1, targetAtack2, targetAtack3, targetAtack4 )
    }

    atackB() {
        log('DEBUG-LOGIC', 'atackB working', 'electric.js')
        paralizador(this.name)
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

