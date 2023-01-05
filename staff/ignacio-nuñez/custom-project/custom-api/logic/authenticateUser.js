const context = require('./context')

module.exports = function authenticateUser(email, password){
    if (!email.length) throw new Error('email is empty')
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (!password.length) throw new Error('password is empty')
    if (typeof password !== 'string') throw new TypeError('password is not a string')

    const { db } = context

    const users = db.collection('users')

    return users.findOne({email})
    .then(user => {
        if(!user) throw new Error (`user with email ${email} dont exist`)

        if(user.password !== password) throw new Error('Wrong password')

        return user._id.toString()
    })
}