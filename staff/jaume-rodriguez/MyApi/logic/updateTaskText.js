const { ObjectId } = require('mongodb')
const context = require('./context')

module.exports = function (userId, taskId, newText) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof taskId !== 'string') throw new TypeError('taskId is not a string')
    if (!taskId.length) throw new Error('taskId is empty')
    if (typeof newText !== 'string') throw new TypeError('newText is not a string')
    if (!newText.length) throw new Error('newText is empty')

    const { db } = context

    const users = db.collection('users')
    const tasks = db.collection('tasks')

    return users.findOne({ _id: ObjectId(userId) })
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return tasks.findOne({ _id: ObjectId(taskId) })
        })
        .then(task => {
            if (!task)
                throw new Error(`post with id ${taskId} does not exist`)


            return tasks.updateOne({ _id: ObjectId(taskId) }, { $set: { text: newText } })
        })
        .then(() => { })
}