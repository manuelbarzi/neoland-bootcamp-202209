



    const {
      errors: { FormatError, LengthError, NotFoundError, AuthError },
      regex: { IS_EMAIL_REGEX, HAS_SPACES_REGEX }
    } = require('com')
    const { Game, User, GameAliens } = require('../models')
    
    function retrieveGameId(userId) {
      if (typeof userId !== 'string') throw new TypeError('userId is not a string')
      if (!userId.length) throw new FormatError('userId is empty')
    
      return Game.findOne({ players: userId }).then(game => {
        const playerOneAlienId = game.aliensPlayerOne[0]
        const playerTwoAlienId = game.aliensPlayerTwo[0]
        const playerOne = game.players[0]
        const playerTwo = game.players[1]
    
        return User.findById({ _id: playerOne })
          .then(gamePlayerOne => {
            const playerOneName = gamePlayerOne.name
            const playerOneElo = gamePlayerOne.elo
            return User.findById({ _id: playerTwo })
              .then(gamePlayerTwo => {
                const playerTwoName = gamePlayerTwo.name
                const playerTwoElo = gamePlayerTwo.elo
    
                return GameAliens.findById({ _id: playerOneAlienId })
                  .then(alienOne => {
                    delete alienOne._doc.player
                    return GameAliens.findById({ _id: playerTwoAlienId })
                      .then(alienTwo => {
                        delete alienTwo._doc.player
                        if (alienOne.stats.speed > alienTwo.stats.speed) {
                          return Game.findOneAndUpdate({ aliensPlayerOne: alienOne._doc._id }, { hasTurn: true })
                            .then(game => {
                              return { turn: game.turn, hasTurn: game.hasTurn, namePlayerOne: playerOneName, eloPlayerOne: playerOneElo, playerOneAlien: alienOne, namePlayerTwo: playerTwoName, eloPlayerTwo: playerTwoElo, playerTwoAlien: alienTwo }
    
                            })
                        } else {
                          return Game.findOneAndUpdate({ aliensPlayerOne: alienOne._doc._id }, { hasTurn: false })
                            .then(game => {
                              return { turn: game.turn, hasTurn: game.hasTurn, namePlayerOne: playerOneName, eloPlayerOne: playerOneElo, playerOneAlien: alienOne, namePlayerTwo: playerTwoName, eloPlayerTwo: playerTwoElo, playerTwoAlien: alienTwo }
                            })
                        }
                      })
                  })
              })
          })
      })
    
    }
    
    module.exports = retrieveGameId


    