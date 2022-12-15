const {
  errors: { FormatError, LengthError, NotFoundError, AuthError, },
  regex: { IS_EMAIL_REGEX, HAS_SPACES_REGEX }
} = require('com')
const { Game, User, GameAliens } = require('../models')

function retrieveGameData(userId) {
  if (typeof userId !== 'string') throw new TypeError('userId is not a string')
  if (!userId.length) throw new FormatError('userId is empty')

  return Game.findOne({ players: userId }).then(game => {
    if(game === null) throw new TypeError('game not exist. return home')
    const playerOne = game.players[0]
    const playerTwo = game.players[1]
    const turn = game.turn

    if (playerTwo !== undefined) {
      return User.findById({ _id: playerOne })
        .then(gamePlayerOne => {
          if(gamePlayerOne === null) throw new TypeError('error. return home')
          const playerOneName = gamePlayerOne.name
          const playerOneElo = gamePlayerOne.elo
          return User.findById({ _id: playerTwo })
            .then(gamePlayerTwo => {
              if(gamePlayerTwo === null) throw new TypeError('error. return home')
              const playerTwoName = gamePlayerTwo.name
              const playerTwoElo = gamePlayerTwo.elo
              const playerOneAlienId = game.aliensPlayerOne[0]
              const playerTwoAlienId = game.aliensPlayerTwo[0]

              if (playerOneAlienId !== undefined) {
                return GameAliens.findById({ _id: playerOneAlienId })
                  .then(alienOne => {
                    if(alienOne === null) throw new TypeError('error. return home')
                    delete alienOne._doc.player
                    return GameAliens.findById({ _id: playerTwoAlienId })
                      .then(alienTwo => {
                        if(alienTwo === null) throw new TypeError('error. return home')
                        delete alienTwo._doc.player
                        if (turn === 0) {
                          if (alienOne.stats.speed > alienTwo.stats.speed) {
                            //Peta porque no para de cambiar a true
                            return Game.findOneAndUpdate({ aliensPlayerOne: alienOne._doc._id }, { hasTurn: true, turn: turn + 1 })
                              .then(game => {
                                if(game === null) throw new TypeError('error. return home')
                                return { turn: game.turn, hasTurn: game.hasTurn, namePlayerOne: playerOneName, eloPlayerOne: playerOneElo, playerOneAlien: alienOne, namePlayerTwo: playerTwoName, eloPlayerTwo: playerTwoElo, playerTwoAlien: alienTwo }

                              })
                          } else {
                            return Game.findOneAndUpdate({ aliensPlayerOne: alienOne._doc._id }, { hasTurn: false, turn: turn + 1 })
                              .then(game => {
                                if(game === null) throw new TypeError('error. return home')
                                return { turn: game.turn, hasTurn: game.hasTurn, namePlayerOne: playerOneName, eloPlayerOne: playerOneElo, playerOneAlien: alienOne, namePlayerTwo: playerTwoName, eloPlayerTwo: playerTwoElo, playerTwoAlien: alienTwo }
                              })
                          }
                        }else{
                          return Game.findOne({ aliensPlayerOne: alienOne._doc._id})
                          .then(game => {
                            if(game === null) throw new TypeError('error. return home')
                            return { turn: game.turn, hasTurn: game.hasTurn, namePlayerOne: playerOneName, eloPlayerOne: playerOneElo, playerOneAlien: alienOne, namePlayerTwo: playerTwoName, eloPlayerTwo: playerTwoElo, playerTwoAlien: alienTwo }

                          })
                        }
                      })
                  })
              } else {
                return User.findById({ _id: playerOne })
                  .then(gamePlayerOne => {
                    if(gamePlayerOne === null) throw new TypeError('error. return home')
                    const playerOneName = gamePlayerOne.name
                    return User.findById({ _id: playerTwo })
                      .then(gamePlayerTwo => {
                        if(gamePlayerTwo === null) throw new TypeError('error. return home')
                        const playerTwoName = gamePlayerTwo.name
                        return { playerOneName: playerOneName, playerTwoName: playerTwoName }
                      })
                  })
              }
            })
        })
    }

  })
}

module.exports = retrieveGameData