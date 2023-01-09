const { ObjectId } = require('mongodb')
const context = require('./context')

module.exports = function (userId, taskId, newTitle) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof taskId !== 'string') throw new TypeError('taskId is not a string')
    if (!taskId.length) throw new Error('taskId is empty')
    if (typeof newTitle !== 'string') throw new TypeError('newTitle is not a string')
    if (!newTitle.length) throw new Error('newTitle is empty')

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


            return tasks.updateOne({ _id: ObjectId(taskId) }, { $set: { title: newTitle } })
        })
        .then(() => { })
}