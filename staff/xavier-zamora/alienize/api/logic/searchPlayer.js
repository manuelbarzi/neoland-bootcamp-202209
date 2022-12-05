const { User, Game } = require("../models")
const { game, user } = require("../models/schemas")

function searchPlayer(userId) {
  if (typeof userId !== 'string') throw new TypeError('userId is not a string')
  if (!userId.length) throw new FormatError('userId is empty')

  return User.find({ hasNotGame: true }).select('-password')
    .then(users => {
      return Game.find({})
        .then(games => {
          if (!users) { throw new Error('users with id ${userId} does not exist') }
          if (users.length > 0) {
            for (let i = users.length; i > 0; i--) {
              const player2ForParse = users.find(result => users[i - 1].id)
              if (player2ForParse.id !== userId) {
                return User.find({ _id: userId }).select('-password')
                  .then(users => {
                    const id = games.length
                    const name = users[0].name
                    const elo = users[0].elo
                    const roomIdPass = users[0].roomId
                    const player1 = { name, elo, roomIdPass }
                    const player2 = { "name": player2ForParse.name, "elo": player2ForParse.elo, "roomId": player2ForParse.roomId }
                    const roomId = games.length

                    return Game.find({ name })
                      .then(games => {
                        if (games.length > 0) {
                          return
                        }

                        return Game.create(({ id, player1, player2, roomId })) && User.findOneAndUpdate({ _id: player2ForParse._id }, { isSearchingGame: false, hasNotGame: false, roomId: games.length })
                          .then(users => {
                            return User.findOneAndUpdate({ _id: userId }, { isSearchingGame: false, hasNotGame: false, roomId: games.length }).select('-password')
                          })
                      })
                  })
              }
            }
          } else {
              return User.find({ _id: userId }).select('-password')
                .then(users => {
                  const name = users[0].name

                  return Game.find({ name })
                    .then(games => {
                      if (games.length > 0) {
                        users[0].isSearchingGame === false
                        return
                      }

                      return User.findOneAndUpdate({ _id: userId }, { isSearchingGame: true, hasNotGame: true, roomId: '' }).select('-password')

                    })
                })
          }
          })
    })
}

module.exports = searchPlayer