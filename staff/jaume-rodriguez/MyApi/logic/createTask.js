const { readFile, writeFile } = require('fs')

function createtask(userId, statusTask, callback) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof statusTask !== 'string') throw new TypeError('statusTask is not a string')
    if (!statusTask.length) throw new Error('statusTask is empty')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const taskCreation = (error, json) => {
        if (error) {
            callback(error)

            return
        }
        const tasks = JSON.parse(json)

        const { id: lastId } = tasks[tasks.length - 1]
        const nextTaskId = `task-${parseInt(lastId.substring(5)) + 1}`
        const task = {
            id: nextTaskId,
            user: userId,
            title: "",
            text: "",
            status: statusTask
        }
        tasks.push(task)
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
    readFile('./data/tasks.json', 'utf8', taskCreation)
}

module.exports = createtask