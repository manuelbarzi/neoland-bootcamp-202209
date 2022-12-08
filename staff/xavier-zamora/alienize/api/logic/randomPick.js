const {
    errors: { FormatError, LengthError, ConflictError, UnexpectedError },
    regex: { IS_EMAIL_REGEX, HAS_SPACES_REGEX, IS_ALPHABETICAL_REGEX }
} = require('com')
const { ObjectId } = require('mongodb')
const { Aliens, GameAliens, Game } = require('../models')
const { game, gameAliens } = require('../models/schemas')

function randomPick(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new FormatError('userId is empty')

    return Game.findOne({ players: userId })

        .then(games => {

            if (games.players.length < 2) {
                return 
            } else {

                return Aliens.find({})
                    .then(aliens => {
                        const picks = []
                        for (let i = 9; i >= 0; i--) {
                            const index = Math.floor(Math.random() * 63)
                            picks.push(aliens[index])
                        }

                        for (let i = 9; i >= 0; i--) {

                        }
                        return GameAliens.create({
                            name: picks[0]._doc.name, type: picks[0]._doc.type, stats: {
                                healthPoints: picks[0]._doc.healthPoints, especialDefense: picks[0]._doc.especialDefense, fisicDefense: picks[0]._doc.fisicDefense, fisicAttack: picks[0]._doc.fisicAtack, especialAttack: picks[0]._doc.especialAtack, psiquicalAttack: picks[0]._doc.psiquicalAtack, speed: picks[0]._doc.speed, healing: picks[0]._doc.healing, repeat: picks[0]._doc.repeat
                            }, attacks: [picks[0]._doc.atack1, picks[0]._doc.atack2, picks[0]._doc.atack3, picks[0]._doc.atack4], passives: [""], player: players[0]
                        },

                            {
                                name: picks[1]._doc.name, type: picks[1]._doc.type, stats: {
                                    healthPoints: picks[1]._doc.healthPoints, especialDefense: picks[1]._doc.especialDefense, fisicDefense: picks[1]._doc.fisicDefense, fisicAttack: picks[1]._doc.fisicAtack, especialAttack: picks[1]._doc.especialAtack, psiquicalAttack: picks[1]._doc.psiquicalAtack, speed: picks[1]._doc.speed, healing: picks[1]._doc.healing, repeat: picks[1]._doc.repeat
                                },
                                attacks: [picks[1]._doc.atack1, picks[1]._doc.atack2, picks[1]._doc.atack3, picks[1]._doc.atack4], passives: [""], player: players[0]
                            },

                            {
                                name: picks[2]._doc.name, type: picks[2]._doc.type, stats: {
                                    healthPoints: picks[2]._doc.healthPoints, especialDefense: picks[2]._doc.especialDefense, fisicDefense: picks[2]._doc.fisicDefense, fisicAttack: picks[2]._doc.fisicAtack, especialAttack: picks[2]._doc.especialAtack, psiquicalAttack: picks[2]._doc.psiquicalAtack, speed: picks[2]._doc.speed, healing: picks[2]._doc.healing, repeat: picks[2]._doc.repeat
                                },
                                attacks: [picks[2]._doc.atack1, picks[2]._doc.atack2, picks[2]._doc.atack3, picks[2]._doc.atack4], passives: [""], player: players[0]
                            },

                            {
                                name: picks[3]._doc.name, type: picks[3]._doc.type, stats: {
                                    healthPoints: picks[3]._doc.healthPoints, especialDefense: picks[3]._doc.especialDefense, fisicDefense: picks[3]._doc.fisicDefense, fisicAttack: picks[3]._doc.fisicAtack, especialAttack: picks[3]._doc.especialAtack, psiquicalAttack: picks[3]._doc.psiquicalAtack, speed: picks[3]._doc.speed, healing: picks[3]._doc.healing, repeat: picks[3]._doc.repeat
                                },
                                attacks: [picks[3]._doc.atack1, picks[3]._doc.atack2, picks[3]._doc.atack3, picks[3]._doc.atack4], passives: [""], player: players[0]
                            },

                            {
                                name: picks[4]._doc.name, type: picks[4]._doc.type, stats: {
                                    healthPoints: picks[4]._doc.healthPoints, especialDefense: picks[4]._doc.especialDefense, fisicDefense: picks[4]._doc.fisicDefense, fisicAttack: picks[4]._doc.fisicAtack, especialAttack: picks[4]._doc.especialAtack, psiquicalAttack: picks[4]._doc.psiquicalAtack, speed: picks[4]._doc.speed, healing: picks[4]._doc.healing, repeat: picks[4]._doc.repeat
                                },
                                attacks: [picks[4]._doc.atack1, picks[4]._doc.atack2, picks[4]._doc.atack3, picks[4]._doc.atack4], passives: [""], player: players[0]
                            },

                            {
                                name: picks[5]._doc.name, type: picks[5]._doc.type, stats:
                                {
                                    healthPoints: picks[5]._doc.healthPoints, especialDefense: picks[5]._doc.especialDefense, fisicDefense: picks[5]._doc.fisicDefense, fisicAttack: picks[5]._doc.fisicAtack, especialAttack: picks[5]._doc.especialAtack, psiquicalAttack: picks[5]._doc.psiquicalAtack, speed: picks[5]._doc.speed, healing: picks[5]._doc.healing, repeat: picks[5]._doc.repeat
                                },
                                attacks: [picks[5]._doc.atack1, picks[5]._doc.atack2, picks[5]._doc.atack3, picks[5]._doc.atack4], passives: [""], player: games.players[1]
                            },

                            {
                                name: picks[6]._doc.name, type: picks[6]._doc.type, stats: {
                                    healthPoints: picks[6]._doc.healthPoints, especialDefense: picks[6]._doc.especialDefense, fisicDefense: picks[6]._doc.fisicDefense, fisicAttack: picks[6]._doc.fisicAtack, especialAttack: picks[6]._doc.especialAtack, psiquicalAttack: picks[6]._doc.psiquicalAtack, speed: picks[6]._doc.speed, healing: picks[6]._doc.healing, repeat: picks[6]._doc.repeat
                                },
                                attacks: [picks[6]._doc.atack1, picks[6]._doc.atack2, picks[6]._doc.atack3, picks[6]._doc.atack4], passives: [""], player: games.players[1]
                            },

                            {
                                name: picks[7]._doc.name, type: picks[7]._doc.type, stats: {
                                    healthPoints: picks[7]._doc.healthPoints, especialDefense: picks[7]._doc.especialDefense, fisicDefense: picks[7]._doc.fisicDefense, fisicAttack: picks[7]._doc.fisicAtack, especialAttack: picks[7]._doc.especialAtack, psiquicalAttack: picks[7]._doc.psiquicalAtack, speed: picks[7]._doc.speed, healing: picks[7]._doc.healing, repeat: picks[7]._doc.repeat
                                },
                                attacks: [picks[7]._doc.atack1, picks[7]._doc.atack2, picks[7]._doc.atack3, picks[7]._doc.atack4], passives: [""], player: games.players[1]
                            },

                            {
                                name: picks[8]._doc.name, type: picks[8]._doc.type, stats: {
                                    healthPoints: picks[8]._doc.healthPoints, especialDefense: picks[8]._doc.especialDefense, fisicDefense: picks[8]._doc.fisicDefense, fisicAttack: picks[8]._doc.fisicAtack, especialAttack: picks[8]._doc.especialAtack, psiquicalAttack: picks[8]._doc.psiquicalAtack, speed: picks[8]._doc.speed, healing: picks[8]._doc.healing, repeat: picks[8]._doc.repeat
                                },
                                attacks: [picks[8]._doc.atack1, picks[8]._doc.atack2, picks[8]._doc.atack3, picks[8]._doc.atack4], passives: [""], player: games.players[1]
                            },

                            {
                                name: picks[9]._doc.name, type: picks[9]._doc.type, stats: {
                                    healthPoints: picks[9]._doc.healthPoints, especialDefense: picks[9]._doc.especialDefense, fisicDefense: picks[9]._doc.fisicDefense, fisicAttack: picks[9]._doc.fisicAtack, especialAttack: picks[9]._doc.especialAtack, psiquicalAttack: picks[9]._doc.psiquicalAtack, speed: picks[9]._doc.speed, healing: picks[9]._doc.healing, repeat: picks[9]._doc.repeat
                                },
                                attacks: [picks[9]._doc.atack1, picks[9]._doc.atack2, picks[9]._doc.atack3, picks[9]._doc.atack4], passives: [""], player: games.players[1]
                            }


                        ).then(gameAliens => {
                            return Game.findOneAndUpdate({ players: userId, aliensPlayerOne: [gameAliens[0]._id, gameAliens[1]._id, gameAliens[2]._id, gameAliens[3]._id, gameAliens[4]._id] }).then({

                            }).then(() => {
                                return Game.findOneAndUpdate({ players: userId, aliensPlayerTwo: [gameAliens[5]._id, gameAliens[6]._id, gameAliens[7]._id, gameAliens[8]._id, gameAliens[9]._id,] }).then({
                                })
                            })
                        })
                    })
                }
        })
}

module.exports = randomPick