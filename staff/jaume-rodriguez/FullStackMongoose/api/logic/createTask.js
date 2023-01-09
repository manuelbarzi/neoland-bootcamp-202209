const { User, Task } = require('../models')

function createTask(userId, statusTask) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof statusTask !== 'string') throw new TypeError('statusTask is not a string')
    if (!statusTask.length) throw new Error('statusTask is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return Task.create({ user: userId, title: "", text: "", status: statusTask })
        })
        .then(() => { })
}

module.exports = createTask