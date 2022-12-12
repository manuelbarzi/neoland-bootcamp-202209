// const { errors: { FormatError, NotFoundError } } = require('../../my-commons')
const { User, Flow } = require('../models')

module.exports = function (userId, type, kind, description, amount, date, flowId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof flowId !== 'string') throw new TypeError('flowId is not a string')
    if (!flowId.length) throw new Error('flowId is empty')
    if (typeof type !== 'string') throw new TypeError('type is not a string')
    if (!type.length) throw new Error('type is empty')
    if (typeof kind !== 'string') throw new TypeError('kind is not a string')
    if (!kind.length) throw new LengthError('kind is empty')
    if (typeof description !== 'string') throw new TypeError('description is not a string')
    if (!description.length) throw new LengthError('description is empty')
    if (typeof amount !== 'number') throw new TypeError('amount is not a number')
    if (!amount) throw new LengthError('amount is empty')
    // if (typeof date !== 'number') throw new TypeError('date is not a number')
    // if (!date.length) throw new LengthError('date is empty')


    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)
            //?.lean() consultar
            return Flow.findById(flowId)
        })
        .then(flow => {
            if (!flow)
                throw new Error(`flow with id ${flowId} does not exist`)

            if (flow.user.toString() !== userId)
                throw new Error(`flow with id ${flowId} does not belong to user with id ${userId}`)


            return Flow.updateOne({ _id: flowId }, { $set: { type, kind, description, amount, date } })
        })

}