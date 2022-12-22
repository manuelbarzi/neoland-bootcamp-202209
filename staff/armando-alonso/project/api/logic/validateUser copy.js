const { User } = require('../models')

async function validateUser(email, password) {

    const user = await User.findOne({ email })
        if (!user) {
            throw new Error('user not registered')
        }

        if (user.password !== password) {
            throw new Error('wrong password')
        }

        return user
}

module.exports = validateUser