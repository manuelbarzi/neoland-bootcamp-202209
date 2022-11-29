function updateTaskTitle(userId, taskId, newTitle, callback) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (typeof taskId !== 'string') throw new Error('taskId is not a string')
    if (typeof newTitle !== 'string') throw new Error('newTitle is not a string')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status, responseTitle: json } = xhr

        if (status >= 500) {
            const { error } = JSON.parse(json)

            callback(new Error(error))

            return
        }

        callback(null)
    }

    xhr.onerror = () => callback(new Error('connection error'))


    xhr.open('PATCH', `http://localhost/tasks/title/${taskId}`)
    xhr.setRequestHeader('Authorization', `Bearer ${userId}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { userId, taskId, newTitle }

    const json = JSON.stringify(payload)

    xhr.send(json)
}

export default updateTaskTitle