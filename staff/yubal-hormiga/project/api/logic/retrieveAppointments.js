const { errors: { FormatError, NotFoundError } } = require('../../my-commons')
const { User, Appointment } = require('../models')

/**
 * Retrieves a appointment from user
 * 
 * 
 * @param {string} userId The user id
 * @param {string} appointmentId The appointment id

 */
module.exports = function (userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new FormatError('userId is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Appointment.find({user:userId}).select('-user -__v').lean()
        })
        .then(appointments => {
            appointments.forEach(appointment=>{
                appointment.id = appointment._id.toString()

                delete appointment._id
            })

            return appointments
        })
}