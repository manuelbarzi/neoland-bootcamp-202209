function createTask(token, statusTask) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new Error('token is empty')
    if (!statusTask.length) throw new Error('visibility is empty')
    if (statusTask !== "todo" && statusTask !== "done" && statusTask !== "doing") throw new Error('invalid status provided')

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

        xhr.open('POST', 'http://localhost/tasks')
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.setRequestHeader('Content-Type', 'application/json')

        const payload = { token, statusTask }
        const json = JSON.stringify(payload)

        xhr.send(json)
    })
}

export default createTask