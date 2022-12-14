
const { User } = require('../models')
const context = require('./context')

async function authenticateUser(email, password) {

    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        throw new Error('user not registered')
    }

    if (user.password !== password) {
        throw new Error('wrong password')
    }

    return user

}

module.exports = authenticateUser