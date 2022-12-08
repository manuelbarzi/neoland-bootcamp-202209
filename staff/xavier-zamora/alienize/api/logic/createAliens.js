const {
    errors: { FormatError, LengthError, ConflictError, UnexpectedError },
    regex: { IS_EMAIL_REGEX, HAS_SPACES_REGEX, IS_ALPHABETICAL_REGEX }
} = require('com')
const { ObjectId } = require('mongodb')
const { Aliens, GameAliens, Game } = require('../models')
const { game } = require('../models/schemas')
const pushAliens = require('./createGame')

function createAlien(userId, ) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new FormatError('userId is empty')
        
}

module.exports = createAlien