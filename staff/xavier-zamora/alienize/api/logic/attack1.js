const { errors: { FormatError } } = require('com')
const { default: changeTurn } = require('./changeTurn')
const { User, Game, GameAliens } = require('../models')
const chop = require('./attacks/chop')
const fliyingStell = require('./attacks/fliyingStell')
const stayingSharp = require('./attacks/stayingSharp')
const stellBall = require('./attacks/stellBall')

function attack1(userId, index) {
  if (typeof userId !== 'string') throw new TypeError('userId is not a string')
  if (!userId) throw new FormatError('userId is empty')
  if (index === undefined) throw new FormatError('index is empty')

  return Game.findOne({ players: userId })
    .then(game => {

      const alienOneId = game.aliensPlayerOne[0].toString()
      const alienTwoId = game.aliensPlayerTwo[0].toString()

      if (game.players[0]._id.toString() === userId) {
        return GameAliens.findById({ _id: alienOneId })
          .then(alien => {
            if(!alien) throw new TypeError('Error')
            let attack

            if (index === 0) attack = alien.attacks[0]
            if (index === 1) attack = alien.attacks[1]
            if (index === 2) attack = alien.attacks[2]
            if (index === 3) attack = alien.attacks[3]

            //Steel
            if (attack === "Chop") chop(alienOneId, alienTwoId, userId)
            if (attack === "Staying Sharp") chop(alienOneId, alienTwoId, userId)
            if (attack === "Stell Ball") chop(alienOneId, alienTwoId, userId)
            if (attack === "Fliying Stell") chop(alienOneId, alienTwoId, userId)

            //Bug
            if (attack === "Poison Cocktail") chop(alienOneId, alienTwoId, userId)
            if (attack === "Intoxicate") chop(alienOneId, alienTwoId, userId)
            if (attack === "Combinate Substances") chop(alienOneId, alienTwoId, userId)
            if (attack === "Absorb Substances") chop(alienOneId, alienTwoId, userId)

            //Dark Matter
            if (attack === "Dark Light") chop(alienOneId, alienTwoId, userId)
            if (attack === "Dark Star") chop(alienOneId, alienTwoId, userId)
            if (attack === "Black Hole") chop(alienOneId, alienTwoId, userId)

            //Dragon
            if (attack === "Fast Flight") chop(alienOneId, alienTwoId, userId)
            if (attack === "Prediction") chop(alienOneId, alienTwoId, userId)
            if (attack === "Drake Roar") chop(alienOneId, alienTwoId, userId)

            //Electric
            if (attack === "High Voltatge") chop(alienOneId, alienTwoId, userId)
            if (attack === "Paralyzer Attack") chop(alienOneId, alienTwoId, userId)
            if (attack === "Ray Of Destruction") chop(alienOneId, alienTwoId, userId)

            //Fire
            if (attack === "Flamethrower") chop(alienOneId, alienTwoId, userId)
            if (attack === "Fire Kick") chop(alienOneId, alienTwoId, userId)
            if (attack === "Ignite") chop(alienOneId, alienTwoId, userId)

            //Flying
            if (attack === "Agile Flight") chop(alienOneId, alienTwoId, userId)
            if (attack === "Tornado") chop(alienOneId, alienTwoId, userId)
            if (attack === "Acrobat") chop(alienOneId, alienTwoId, userId)

            //Plant
            if (attack === "Roots") chop(alienOneId, alienTwoId, userId)
            if (attack === "Smell") chop(alienOneId, alienTwoId, userId)
            if (attack === "Photosynthesis") chop(alienOneId, alienTwoId, userId)

            //Psiquic
            if (attack === "Sleep") chop(alienOneId, alienTwoId, userId)
            if (attack === "Psychic Ray") chop(alienOneId, alienTwoId, userId)

            //Sand
            if (attack === "Storm Sand") chop(alienOneId, alienTwoId, userId)
            if (attack === "Quick Sand") chop(alienOneId, alienTwoId, userId)
            if (attack === "Desert") chop(alienOneId, alienTwoId, userId)
            if (attack === "Oasis") chop(alienOneId, alienTwoId, userId)

            //Stone
            if (attack === "Detachment") chop(alienOneId, alienTwoId, userId)
            if (attack === "Stoned") chop(alienOneId, alienTwoId, userId)
            if (attack === "Stone Fusion") chop(alienOneId, alienTwoId, userId)

            //Water
            if (attack === "Surf") chop(alienOneId, alienTwoId, userId)
            if (attack === "Flood") chop(alienOneId, alienTwoId, userId)
            if (attack === "Rought Sea") chop(alienOneId, alienTwoId, userId)
            if (attack === "Water Punch") chop(alienOneId, alienTwoId, userId)
          })
      }
      if (game.players[1]._id.toString() === userId) {
        return GameAliens.findById({ _id: alienTwoId })
          .then(alien => {

            if(!alien) throw new TypeError('Error')

            let attack

            if (index === 0) attack = alien.attacks[0]
            if (index === 1) attack = alien.attacks[1]
            if (index === 2) attack = alien.attacks[2]
            if (index === 3) attack = alien.attacks[3]

            //Steel
            if (attack === "Chop") chop(alienTwoId, alienOneId, userId)
            if (attack === "Staying Sharp") chop(alienTwoId, alienOneId, userId)
            if (attack === "Stell Ball") chop(alienTwoId, alienOneId, userId)
            if (attack === "Fliying Stell") chop(alienTwoId, alienOneId, userId)

            //Bug
            if (attack === "Poison Cocktail") chop(alienTwoId, alienOneId, userId)
            if (attack === "Intoxicate") chop(alienTwoId, alienOneId, userId)
            if (attack === "Combinate Substances") chop(alienTwoId, alienOneId, userId)
            if (attack === "Absorb Substances") chop(alienTwoId, alienOneId, userId)

            //Dark Matter
            if (attack === "Dark Light") chop(alienTwoId, alienOneId, userId)
            if (attack === "Dark Star") chop(alienTwoId, alienOneId, userId)
            if (attack === "Black Hole") chop(alienTwoId, alienOneId, userId)

            //Dragon
            if (attack === "Fast Flight") chop(alienTwoId, alienOneId, userId)
            if (attack === "Prediction") chop(alienTwoId, alienOneId, userId)
            if (attack === "Drake Roar") chop(alienTwoId, alienOneId, userId)

            //Electric
            if (attack === "High Voltatge") chop(alienTwoId, alienOneId, userId)
            if (attack === "Paralyzer Attack") chop(alienTwoId, alienOneId, userId)
            if (attack === "Ray Of Destruction") chop(alienTwoId, alienOneId, userId)

            //Fire
            if (attack === "Flamethrower") chop(alienTwoId, alienOneId, userId)
            if (attack === "Fire Kick") chop(alienTwoId, alienOneId, userId)
            if (attack === "Ignite") chop(alienTwoId, alienOneId, userId)

            //Flying
            if (attack === "Agile Flight") chop(alienTwoId, alienOneId, userId)
            if (attack === "Tornado") chop(alienTwoId, alienOneId, userId)
            if (attack === "Acrobat") chop(alienTwoId, alienOneId, userId)

            //Plant
            if (attack === "Roots") chop(alienTwoId, alienOneId, userId)
            if (attack === "Smell") chop(alienTwoId, alienOneId, userId)
            if (attack === "Photosynthesis") chop(alienTwoId, alienOneId, userId)

            //Psiquic
            if (attack === "Sleep") chop(alienTwoId, alienOneId, userId)
            if (attack === "Psychic Ray") chop(alienTwoId, alienOneId, userId)

            //Sand
            if (attack === "Storm Sand") chop(alienTwoId, alienOneId, userId)
            if (attack === "Quick Sand") chop(alienTwoId, alienOneId, userId)
            if (attack === "Desert") chop(alienTwoId, alienOneId, userId)
            if (attack === "Oasis") chop(alienTwoId, alienOneId, userId)

            //Stone
            if (attack === "Detachment") chop(alienTwoId, alienOneId, userId)
            if (attack === "Stoned") chop(alienTwoId, alienOneId, userId)
            if (attack === "Stone Fusion") chop(alienTwoId, alienOneId, userId)

            //Water
            if (attack === "Surf") chop(alienTwoId, alienOneId, userId)
            if (attack === "Flood") chop(alienTwoId, alienOneId, userId)
            if (attack === "Rought Sea") chop(alienTwoId, alienOneId, userId)
            if (attack === "Water Punch") chop(alienTwoId, alienOneId, userId)
          })
      }
    })
}

module.exports = attack1