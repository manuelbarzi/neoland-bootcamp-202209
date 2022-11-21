function createTask(userId, statusTask, callback) {
    if (statusTask !== "todo" && statusTask !== "done" && statusTask !== "doing") throw new Error('invalid status provided')

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status, responseText: json } = xhr

        if (status >= 500) {
            const { error } = JSON.parse(json)

            callback(new Error(error))

            return
        }
        callback(null)
    }

    xhr.onerror = () => callback(new Error('connection error'))


    xhr.open('POST', 'http://localhost/tasks')
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { userId, statusTask }

    const json = JSON.stringify(payload)

    xhr.send(json)
}

export default createTask