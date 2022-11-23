const { readFile, writeFile } = require('fs')

function updateTaskTitle(userId, taskId, newTitle, callback) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof taskId !== 'string') throw new TypeError('taskId is not a string')
    if (!taskId.length) throw new Error('taskId is empty')
    if (typeof newTitle !== 'string') throw new TypeError('newTitle is not a string')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const updateTaskTitle = (error, json) => {
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

        // Valores y referencia / Valor = copia / referencia = puntero
        databaseTask.title = newTitle

        const newJson = JSON.stringify(tasks, null, 4)

        const taskTitleTranscribed = error => {
            if (error) {
                callback(error)

                return
            }
            callback(null)
        }
        writeFile('./data/tasks.json', newJson, taskTitleTranscribed)
    }
    readFile('./data/tasks.json', 'utf8', updateTaskTitle)
}

module.exports = updateTaskTitle