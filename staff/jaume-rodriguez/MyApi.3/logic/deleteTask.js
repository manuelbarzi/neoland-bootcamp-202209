const { readFile, writeFile } = require('fs')

function deleteTask(userId, taskId, callback) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof taskId !== 'string') throw new TypeError('taskId is not a string')
    if (!taskId.length) throw new Error('taskId is empty')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const taskDelete = (error, json) => {
        if (error) {
            callback(error)

            return
        }
        const tasks = JSON.parse(json)

        tasks.splice(tasks.findIndex(task => task.id === taskId), 1);

        const newJson = JSON.stringify(tasks, null, 4)

        const taskTranscribed = error => {
            if (error) {
                callback(error)

                return
            }
            callback(null)
        }
        writeFile('./data/tasks.json', newJson, taskTranscribed)
    }
    readFile('./data/tasks.json', 'utf8', taskDelete)
}

module.exports = deleteTask