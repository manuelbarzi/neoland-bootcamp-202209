const { ObjectId } = require('mongodb')
const context = require('./context')

function retrieveTasks(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')

    const { db } = context

    const users = db.collection('users')
    const tasks = db.collection('tasks')

    return users.findOne({ _id: ObjectId(userId) })
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return tasks.find({ user: ObjectId(userId) }).toArray()
        })
        .then(userTasks => {
            userTasks.forEach(userTask => {
                userTask.id = userTask._id.toString()
            })
            return userTasks
        })
}
module.exports = retrieveTasks