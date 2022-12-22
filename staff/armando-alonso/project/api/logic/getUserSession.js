const context = require('./context')
const { ObjectId } = require('mongodb')

/**
 * Recover the user who has logged in
 * Recuperamos el usuario que ha hecho login
 * 
 * @param {string} userId The user Id
 */

function getUserSession(userId) {

    const { db } = context

    const users = db.collection('users')

    return users.findOne({ _id: ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error(`El usuario no existe.`)

            delete user.password
            delete user._id

            return user
        })
}

module.exports = getUserSession 