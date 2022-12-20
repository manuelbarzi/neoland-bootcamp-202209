const { GameAliens } = require("../../models")
const changeTurn = require("../changeTurn")
const deadAlien = require('../deadAlien')

function chop(attack, defend, userId){
    return GameAliens.findById({ _id: attack })
    .then(alienAttack => {
        const especialAttackAlienAttack = alienAttack._doc.stats.especialAttack
        return GameAliens.findById({ _id: defend })
            .then(alienDefend => {
                const type = alienDefend.type
                const healthPoints = alienDefend._doc.stats.healthPoints
                const especialDefense = alienDefend._doc.stats.especialDefense
                const fisicDefense = alienDefend._doc.stats.fisicDefense
                const fisicAttack = alienDefend._doc.stats.fisicAttack
                const especialAttack = alienDefend._doc.stats.especialAttack
                const psiquicalAttack = alienDefend._doc.stats.psiquicalAttack
                const speed = alienDefend._doc.stats.speed
                const healing = alienDefend._doc.stats.healing  
                const repeat = alienDefend._doc.stats.repeat  

                let damageMult = 1

                if(type === "Psiquic") damageMult = 1.4

                const damage = especialAttackAlienAttack - especialDefense 
                if(damage < 0) damage === 0
                const res = healthPoints - (damage * damageMult)
                if(res < 0) deadAlien(userId)
                Math.floor(res)


                return GameAliens.findByIdAndUpdate({_id: defend}, {stats: {healthPoints: res, especialDefense: especialDefense, fisicDefense: fisicDefense, fisicAttack: fisicAttack, especialAttack: especialAttack, psiquicalAttack: psiquicalAttack, speed: speed, healing: healing, repeat: repeat}})
                .then(alien => {
                })
            })
    })
}

module.exports = chop