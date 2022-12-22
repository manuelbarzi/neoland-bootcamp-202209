const { GameAliens } = require("../../models")

function fliyingStell(attack, defend){
    return GameAliens.findById({ _id: attack })
    .then(alienAttack => {
        const fisicAttack = alienAttack.fisicAttack
        return GameAliens.findById({ _id: defend })
            .then(alienDefend => {
                const type = alienDefend.type
                const healthPoints = alienDefend.healthPoints
                const especialDefense = alienDefend.especialDefense
                let damageMult = 1

                if(type === "Psiquic") damageMult = 1.4

                const damage = fisicAttack - especialDefense 
                if(damage > 0) damage === 0
                const res = healthPoints - (damage * damageMult)
                if(res > 0) res === 0
                Math.floor(res)

                return GameAliens.findByIdAndUpdate({_id: defend}, {healthPoints: res})
            })
    })
}

module.exports = fliyingStell