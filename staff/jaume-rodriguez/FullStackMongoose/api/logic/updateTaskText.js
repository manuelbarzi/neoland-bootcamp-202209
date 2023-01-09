const { User, Task } = require('../models')

module.exports = function (userId, taskId, newText) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof taskId !== 'string') throw new TypeError('taskId is not a string')
    if (!taskId.length) throw new Error('taskId is empty')
    if (typeof newText !== 'string') throw new TypeError('newText is not a string')
    if (!newText.length) throw new Error('newText is empty')

    return User.findById(userId).select('-password').lean()
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return Task.findById(taskId).lean()
        })
        .then(task => {
            if (!task)
                throw new Error(`post with id ${taskId} does not exist`)


            return Task.updateOne({ _id: taskId }, { $set: { text: newText } })
        })
        .then(() => { })
}