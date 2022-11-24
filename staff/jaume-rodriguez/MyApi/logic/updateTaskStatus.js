const { readFile, writeFile } = require('fs')

function updateTaskStatus(userId, taskId, newStatus, callback) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof taskId !== 'string') throw new TypeError('taskId is not a string')
    if (!taskId.length) throw new Error('taskId is empty')
    if (typeof newStatus !== 'string') throw new TypeError('newStatus is not a string')
    if (!newStatus.length) throw new Error('newStatus is empty')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const updateTaskStatus = (error, json) => {
        if (error) {
            callback(error)

            return
        }
        const tasks = JSON.parse(json)
        const databaseTask = tasks.find(task => task.id === taskId)
        if (databaseTask === undefined) {

            callback(new Error(`taskId not found`))
            return
        }

        if (databaseTask.status === newStatus) {
            callback(new Error(`Your new status cannot be the same as the current status`))

            return
        }
        // Valores y referencia / Valor = copia / referencia = puntero
        databaseTask.status = newStatus

        const newJson = JSON.stringify(tasks, null, 4)

        const taskStatusTranscribed = error => {
            if (error) {
                callback(error)

                return
            }
            callback(null)
        }
        writeFile('./data/tasks.json', newJson, taskStatusTranscribed)
    }
    readFile('./data/tasks.json', 'utf8', updateTaskStatus)
}

module.exports = updateTaskStatus