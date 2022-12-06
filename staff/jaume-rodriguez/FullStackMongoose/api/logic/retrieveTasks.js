const { User, Task } = require('../models')

function retrieveTasks(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return Task.find({ user: userId }).sort({ date: -1 }).populate('user', '-email -password').select('-__v').lean()
        })
        .then(tasks => {
            tasks.forEach(task => {
                task.id = task._id.toString()
                delete task._id

                if (!task.user.id) {
                    task.user.id = task.user._id.toString()
                    delete task.user._id
                }
            })
            return tasks

        })
}
module.exports = retrieveTasks