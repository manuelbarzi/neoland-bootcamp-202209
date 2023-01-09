const { User, Post } = require('../models')
const {
    errors: { NotFoundError },
    validators: { validateUserId, validateText }
} = require('com')

function createPost(userId, text) {
    validateUserId(userId)
    validateText(text)

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError('User not registered')

            return Post.create({ user: userId, text, date: new Date })
        })
        .then(() => { })
}

module.exports = createPost