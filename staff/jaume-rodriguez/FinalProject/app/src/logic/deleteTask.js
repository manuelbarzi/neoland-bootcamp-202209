function deleteTask(token, taskId) {
    if (typeof token !== 'string') throw new Error('token is not a string')
    if (!token.length) throw new Error('token is empty')
    if (typeof taskId !== 'string') throw new Error('taskId is not a string')
    if (!taskId.length) throw new Error('taskId is empty')

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


        xhr.open('DELETE', `http://localhost/tasks/${taskId}`)
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)

        const payload = { token, taskId }

        const json = JSON.stringify(payload)

        xhr.send(json)
    })
}

export default deleteTask