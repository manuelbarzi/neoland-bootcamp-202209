const {
    errors: { FormatError, LengthError, NotFoundError, AuthError },
    regex: { IS_EMAIL_REGEX, HAS_SPACES_REGEX }
  } = require('com')
  const { Game, User } = require('../models')
    
    function retrieveGameId(userId) {
      if (typeof userId !== 'string') throw new TypeError('userId is not a string')
      if (!userId.length) throw new FormatError('userId is empty')
    
      return Game.findOne({ players: userId }).then(game => {

          return game._id
      })
      
    }
    
    module.exports = retrieveGameId