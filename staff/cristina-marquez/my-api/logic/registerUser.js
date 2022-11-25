const context = require('./context')

async function registerUser(name, email, password) {
    if (typeof name !== 'string') throw new TypeError('name is not a string')
    if (!name.length) throw new Error('name is empty')
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (!email.length) throw new Error('email is empty')
    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (!password.length) throw new Error('password is empty')

    const { db } = context
    const users = db.collection('users')


    const user = await users.findOne({ email })

    if (user) {
        throw new Error('user already registered')
    }

    const result = await users.insertOne({ name, email, password })
    return result.insertedId

}

module.exports = registerUser