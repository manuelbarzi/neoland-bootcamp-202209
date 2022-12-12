// const { errors: { FormatError, NotFoundError } } = require('../../my-commons')
const { User, Appointment } = require('../models')

module.exports = function (userId, title, body, date, appointmentId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof appointmentId !== 'string') throw new TypeError('appointmentId is not a string')
    if (!appointmentId.length) throw new Error('appointmentId is empty')
    if (typeof title !== 'string') throw new TypeError('title is not a string')
    if (!title.length) throw new LengthError('title is empty')
    if (typeof body !== 'string') throw new TypeError('body is not a string')
    if (!body.length) throw new LengthError('body is empty')
    // if (typeof date !== 'number') throw new TypeError('date is not a number')
    // if (!date.length) throw new LengthError('date is empty')




    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)
                //?.lean() consultar
            return Appointment.findById(appointmentId)
        })
        .then(appointment => {
            if (!appointment)
                throw new Error(`appointment with id ${appointmentId} does not exist`)

            if (appointment.user.toString() !== userId)
                throw new Error(`appointment with id ${appointmentId} does not belong to user with id ${userId}`)


            return Appointment.updateOne({_id:appointmentId}, { $set: { title, body, date} })
        })

}