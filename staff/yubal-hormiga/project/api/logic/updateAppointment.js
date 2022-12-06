const { errors: { FormatError, NotFoundError } } = require('../../my-commons')
const { User, Appointment } = require('../models')

module.exports = function (userId, appointmentId, tittle, visibility) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof appointmentId !== 'string') throw new TypeError('postId is not a string')
    if (!appointmentId.length) throw new Error('postId is empty')
    if (typeof text !== 'string') throw new TypeError('text is not a string')
    if (!text.length) throw new Error('text is empty')



    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return Appointment.findById(appointmentId).lean()
        })
        .then(appointment => {
            if (!appointment)
                throw new Error(`appointment with id ${appointmentId} does not exist`)

            if (appointment.user.toString() !== userId)
                throw new Error(`appointment with id ${appointmentId} does not belong to user with id ${userId}`)


            return appointment.updateOne({appointmentId}, { $set: { tittle, visibility, date: new Date } })
        })
        .then(result => {
            const { acknowledged } = result

            if (!acknowledged) throw new Error(`could not update appointment with id ${appointmentId}`)
         })
}