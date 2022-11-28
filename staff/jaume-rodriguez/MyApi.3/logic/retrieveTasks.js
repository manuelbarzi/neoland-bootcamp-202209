const { readFile } = require('fs')

function retrieveTasks(userId, callback) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const parsedTasks = (error, json) => {
        if (error) {
            callback(error)

            return
        }

        const tasks = JSON.parse(json)
        const task = tasks.filter(task => task.user === userId);

        callback(null, task)
    }
    readFile('./data/tasks.json', 'utf8', parsedTasks)
}

module.exports = retrieveTasks