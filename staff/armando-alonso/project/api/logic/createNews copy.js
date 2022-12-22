const { User, Noticias } = require('../models')

async function createNews( userId, title, text, topic, visibility ) {

    await User.findOne(userId)
    .then(user => {
            if (!user) {
                throw new Error(`User with id ${userId} does not exists`)
            }
            return Noticias.create({ userId, title, text, topic, visibility, date: new Date })
        })
    }

module.exports = createNews