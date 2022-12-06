function updateTaskTitle(token, taskId, newTitle) {
    if (typeof token !== 'string') throw new Error('token is not a string')
    if (!token.length) throw new Error('token is empty')
    if (typeof taskId !== 'string') throw new Error('taskId is not a string')
    if (!taskId.length) throw new Error('taskId is empty')
    if (typeof newTitle !== 'string') throw new Error('newTitle is not a string')
    if (!newTitle.length) throw new Error('newTitle is empty')

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.onload = () => {
            const { status, responseTitle: json } = xhr

            if (status >= 500) {
                const { error } = JSON.parse(json)

                reject(new Error(error))

                return
            }

            resolve()
        }

        xhr.onerror = () => reject(new Error('connection error'))


        xhr.open('PATCH', `http://localhost/tasks/title/${taskId}`)
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.setRequestHeader('Content-Type', 'application/json')

        const payload = { token, taskId, newTitle }
        const json = JSON.stringify(payload)

        xhr.send(json)
    })
}

export default updateTaskTitle