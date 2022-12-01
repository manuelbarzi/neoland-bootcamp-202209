function updateTaskStatus(token, taskId, newStatus) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new Error('token is empty')
    if (typeof taskId !== 'string') throw new TypeError('taskId is not a string')
    if (!taskId.length) throw new Error('taskId is empty')
    if (typeof newStatus !== 'string') throw new Error('newStatus is not a string')

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.onload = () => {
            const { status, responseText: json } = xhr

            if (status >= 500) {
                const { error } = JSON.parse(json)

                reject(new Error(error))

                return
            }

            resolve()
        }

        xhr.onerror = () => reject(new Error('connection error'))


        xhr.open('PATCH', `http://localhost/tasks/${taskId}`)
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.setRequestHeader('Content-Type', 'application/json')

        const payload = { taskId, newStatus }
        const json = JSON.stringify(payload)

        xhr.send(json)
    })
}

export default updateTaskStatus