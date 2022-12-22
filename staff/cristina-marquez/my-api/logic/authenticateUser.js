const context = require('./context')

async function authenticateUser(email, password) {
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (!email.length) throw new Error('email is empty')
    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (!password.length) throw new Error('password is empty')


    const { db } = context
    const users = db.collection('users')


    const user = await users.findOne({ email })

    if (!user) {
        throw new Error('user not registered')
    }

    if (user.password !== password) {
        throw new Error('wrong password')
    }

    return user

}

module.exports = authenticateUser