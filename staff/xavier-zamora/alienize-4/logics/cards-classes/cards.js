class healthCard {
    constructor() {
        this.name = 'HEALTH'
        this.disable = false
    }

    efect(alienAtack, alienDefense){
        healthCardFunction(alienAtack, alienDefense)
    }
}

class damageCard {
    constructor() {
        this.name = 'DAMAGE'
        this.disable = false
    }

    efect(alienAtack, alienDefense){
        damageCardFunction(alienAtack, alienDefense)
    }
}