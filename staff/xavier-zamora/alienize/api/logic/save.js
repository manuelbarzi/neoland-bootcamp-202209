/*const {
    errors: { FormatError, LengthError, ConflictError, UnexpectedError },
    regex: { IS_EMAIL_REGEX, HAS_SPACES_REGEX, IS_ALPHABETICAL_REGEX }
} = require('com')
const { ObjectId } = require('mongodb')
const { Alien, Game } = require('../models')

function randomPick(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new FormatError('userId is empty')

    return Game.findOne({ players: userId })
        .then(games => {
            if (games.players.length < 2) {
                setTimeout(wait, 2000)
                function wait() {
                    console.log('searching player')
                }
                return randomPick(userId)
            } else {
                
                return Alien.find({})
                    .then(aliens => {
                        const picks = []
                        for (let i = 10; i > 0; i--) {
                            const index = Math.floor(Math.random() * 63)
                            picks.push(aliens[index])
                        }

                        Game.findOneAndUpdate({ _doc: games, aliensPlayerOne: [{ name: picks[0]._doc.name, type: picks[0]._doc.type, alien_id: picks[0]._doc.id, healthpoints: picks[0]._doc.healthPoints, especialDefense: picks[0]._doc.especialDefense, fisicDefense: picks[0]._doc.fisicDefense, especialAtack: picks[0]._doc.especialAtack, fisicAtack: picks[0]._doc.fisicAtack, psiquicalAtack: picks[0]._doc.psiquicalAtack, speed: picks[0]._doc.speed, healing: picks[0]._doc.healing, repeat: picks[0]._doc.repeat, passiveEfect: picks[0]._doc.passiveEfect, paralyzed: picks[0]._doc.paralyzed, poisoned: picks[0]._doc.poisoned, predicted: picks[0]._doc.predicted, atack1: picks[0]._doc.atack1, atack2: picks[0]._doc.atack2, atack3: picks[0]._doc.atack3, atack4: picks[0]._doc.atack4 }, { name: picks[1]._doc.name, type: picks[1]._doc.type, alien_id: picks[1]._doc.id, healthpoints: picks[1]._doc.healthPoints, especialDefense: picks[1]._doc.especialDefense, fisicDefense: picks[1]._doc.fisicDefense, especialAtack: picks[1]._doc.especialAtack, fisicAtack: picks[1]._doc.fisicAtack, psiquicalAtack: picks[1]._doc.psiquicalAtack, speed: picks[1]._doc.speed, healing: picks[1]._doc.healing, repeat: picks[1]._doc.repeat, passiveEfect: picks[1]._doc.passiveEfect, paralyzed: picks[1]._doc.paralyzed, poisoned: picks[1]._doc.poisoned, predicted: picks[1]._doc.predicted, atack1: picks[1]._doc.atack1, atack2: picks[1]._doc.atack2, atack3: picks[1]._doc.atack3, atack4: picks[1]._doc.atack4 }, { name: picks[2]._doc.name, type: picks[2]._doc.type, alien_id: picks[2]._doc.id, healthpoints: picks[2]._doc.healthPoints, especialDefense: picks[2]._doc.especialDefense, fisicDefense: picks[2]._doc.fisicDefense, especialAtack: picks[2]._doc.especialAtack, fisicAtack: picks[2]._doc.fisicAtack, psiquicalAtack: picks[2]._doc.psiquicalAtack, speed: picks[2]._doc.speed, healing: picks[2]._doc.healing, repeat: picks[2]._doc.repeat, passiveEfect: picks[2]._doc.passiveEfect, paralyzed: picks[2]._doc.paralyzed, poisoned: picks[2]._doc.poisoned, predicted: picks[2]._doc.predicted, atack1: picks[2]._doc.atack1, atack2: picks[2]._doc.atack2, atack3: picks[2]._doc.atack3, atack4: picks[2]._doc.atack4 }, { name: picks[3]._doc.name, type: picks[3]._doc.type, alien_id: picks[3]._doc.id, healthpoints: picks[3]._doc.healthPoints, especialDefense: picks[3]._doc.especialDefense, fisicDefense: picks[3]._doc.fisicDefense, especialAtack: picks[3]._doc.especialAtack, fisicAtack: picks[3]._doc.fisicAtack, psiquicalAtack: picks[3]._doc.psiquicalAtack, speed: picks[3]._doc.speed, healing: picks[3]._doc.healing, repeat: picks[3]._doc.repeat, passiveEfect: picks[3]._doc.passiveEfect, paralyzed: picks[3]._doc.paralyzed, poisoned: picks[3]._doc.poisoned, predicted: picks[3]._doc.predicted, atack1: picks[3]._doc.atack1, atack2: picks[3]._doc.atack2, atack3: picks[3]._doc.atack3, atack4: picks[3]._doc.atack4 }, { name: picks[4]._doc.name, type: picks[4]._doc.type, alien_id: picks[4]._doc.id, healthpoints: picks[4]._doc.healthPoints, especialDefense: picks[4]._doc.especialDefense, fisicDefense: picks[4]._doc.fisicDefense, especialAtack: picks[4]._doc.especialAtack, fisicAtack: picks[4]._doc.fisicAtack, psiquicalAtack: picks[4]._doc.psiquicalAtack, speed: picks[4]._doc.speed, healing: picks[4]._doc.healing, repeat: picks[4]._doc.repeat, passiveEfect: picks[4]._doc.passiveEfect, paralyzed: picks[4]._doc.paralyzed, poisoned: picks[4]._doc.poisoned, predicted: picks[4]._doc.predicted, atack1: picks[4]._doc.atack1, atack2: picks[4]._doc.atack2, atack3: picks[4]._doc.atack3, atack4: picks[4]._doc.atack4 }] })
                        .then()
                        
                        Game.findOneAndUpdate({
                            _doc: games, aliensPlayerTwo: [{ name: picks[5]._doc.name, type: picks[5]._doc.type, alien_id: picks[5]._doc.id, healthpoints: picks[5]._doc.healthPoints, especialDefense: picks[5]._doc.especialDefense, fisicDefense: picks[5]._doc.fisicDefense, especialAtack: picks[5]._doc.especialAtack, fisicAtack: picks[5]._doc.fisicAtack, psiquicalAtack: picks[5]._doc.psiquicalAtack, speed: picks[5]._doc.speed, healing: picks[5]._doc.healing, repeat: picks[5]._doc.repeat, passiveEfect: picks[5]._doc.passiveEfect, paralyzed: picks[5]._doc.paralyzed, poisoned: picks[5]._doc.poisoned, predicted: picks[5]._doc.predicted, atack1: picks[5]._doc.atack1, atack2: picks[5]._doc.atack2, atack3: picks[5]._doc.atack3, atack4: picks[5]._doc.atack4 }, { name: picks[6]._doc.name, type: picks[6]._doc.type, alien_id: picks[6]._doc.id, healthpoints: picks[6]._doc.healthPoints, especialDefense: picks[6]._doc.especialDefense, fisicDefense: picks[6]._doc.fisicDefense, especialAtack: picks[6]._doc.especialAtack, fisicAtack: picks[6]._doc.fisicAtack, psiquicalAtack: picks[6]._doc.psiquicalAtack, speed: picks[6]._doc.speed, healing: picks[6]._doc.healing, repeat: picks[6]._doc.repeat, passiveEfect: picks[6]._doc.passiveEfect, paralyzed: picks[6]._doc.paralyzed, poisoned: picks[6]._doc.poisoned, predicted: picks[6]._doc.predicted, atack1: picks[6]._doc.atack1, atack2: picks[6]._doc.atack2, atack3: picks[6]._doc.atack3, atack4: picks[6]._doc.atack4 }, { name: picks[7]._doc.name, type: picks[7]._doc.type, alien_id: picks[7]._doc.id, healthpoints: picks[7]._doc.healthPoints, especialDefense: picks[7]._doc.especialDefense, fisicDefense: picks[7]._doc.fisicDefense, especialAtack: picks[7]._doc.especialAtack, fisicAtack: picks[7]._doc.fisicAtack, psiquicalAtack: picks[7]._doc.psiquicalAtack, speed: picks[7]._doc.speed, healing: picks[7]._doc.healing, repeat: picks[7]._doc.repeat, passiveEfect: picks[7]._doc.passiveEfect, paralyzed: picks[7]._doc.paralyzed, poisoned: picks[7]._doc.poisoned, predicted: picks[7]._doc.predicted, atack1: picks[7]._doc.atack1, atack2: picks[7]._doc.atack2, atack3: picks[7]._doc.atack3, atack4: picks[7]._doc.atack4 }, { name: picks[8]._doc.name, type: picks[8]._doc.type, alien_id: picks[8]._doc.id, healthpoints: picks[8]._doc.healthPoints, especialDefense: picks[8]._doc.especialDefense, fisicDefense: picks[8]._doc.fisicDefense, especialAtack: picks[8]._doc.especialAtack, fisicAtack: picks[8]._doc.fisicAtack, psiquicalAtack: picks[8]._doc.psiquicalAtack, speed: picks[8]._doc.speed, healing: picks[8]._doc.healing, repeat: picks[8]._doc.repeat, passiveEfect: picks[8]._doc.passiveEfect, paralyzed: picks[8]._doc.paralyzed, poisoned: picks[8]._doc.poisoned, predicted: picks[8]._doc.predicted, atack1: picks[8]._doc.atack1, atack2: picks[8]._doc.atack2, atack3: picks[8]._doc.atack3, atack4: picks[8]._doc.atack4 }, { name: picks[9]._doc.name, type: picks[9]._doc.type, alien_id: picks[9]._doc.id, healthpoints: picks[9]._doc.healthPoints, especialDefense: picks[9]._doc.especialDefense, fisicDefense: picks[9]._doc.fisicDefense, especialAtack: picks[9]._doc.especialAtack, fisicAtack: picks[9]._doc.fisicAtack, psiquicalAtack: picks[9]._doc.psiquicalAtack, speed: picks[9]._doc.speed, healing: picks[9]._doc.healing, repeat: picks[9]._doc.repeat, passiveEfect: picks[9]._doc.passiveEfect, paralyzed: picks[9]._doc.paralyzed, poisoned: picks[9]._doc.poisoned, predicted: picks[9]._doc.predicted, atack1: picks[9]._doc.atack1, atack2: picks[9]._doc.atack2, atack3: picks[9]._doc.atack3, atack4: picks[9]._doc.atack4 }]
                        })
                        .then()
                    })
            }
        })
}

module.exports = randomPick*/