const { User, Task } = require('../models')

module.exports = function (userId, taskId, newStatus) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof taskId !== 'string') throw new TypeError('taskId is not a string')
    if (!taskId.length) throw new Error('taskId is empty')
    if (typeof newStatus !== 'string') throw new TypeError('newStatus is not a string')
    if (!newStatus.length) throw new Error('newStatus is empty')

    return User.findById(userId).select('-password').lean()
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return Task.findById(taskId).lean()
        })
        .then(task => {
            if (!task)
                throw new Error(`post with id ${taskId} does not exist`)

            return Task.updateOne({ _id: taskId }, { $set: { status: newStatus } })
        })
        .then(() => { })
}