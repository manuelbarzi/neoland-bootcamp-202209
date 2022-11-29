const { ObjectId } = require('mongodb')
const context = require('./context')

function createTask(userId, statusTask) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof statusTask !== 'string') throw new TypeError('statusTask is not a string')
    if (!statusTask.length) throw new Error('statusTask is empty')

    const { db } = context

    const users = db.collection('users')
    const tasks = db.collection('tasks')

    return users.findOne({ _id: ObjectId(userId) })
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)


            const task = { user: ObjectId(userId), title: "", text: "", status: statusTask }

            return tasks.insertOne(task)
        })
        .then(() => { })
}

module.exports = createTask