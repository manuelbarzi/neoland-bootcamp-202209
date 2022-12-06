const { errors: { LengthError,  NotFoundError } } = require('../../my-commons')
const { User, Appointment } = require('../models')
const { appointment } = require('../models/schemas')


module.exports = function (userId, appointmentId, body) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')
    if (typeof title !== 'string') throw new TypeError('title is not a string')
    if (!title.length) throw new LengthError('title is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return posts.findById({ _id: ObjectId(postId) })
        })
        .then(appointmentId => {
            if (!appointment)
                throw new Error(`appointment with id ${appoimentId} does not exist`)

            if (post.user.toString() !== userId)
                throw new Error(`appointment with id ${appoimentId} does not belong to user with id ${userId}`)


            return appointment.updateOne({ _id: ObjectId(postId) }, { $set: { text, visibility, date: new Date } })
        })
        .then(result => {
            const { acknowledged } = result

            if (!acknowledged) throw new Error(`could not update post with id ${postId}`)
         })
}