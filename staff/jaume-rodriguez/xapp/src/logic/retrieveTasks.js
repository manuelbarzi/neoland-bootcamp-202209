function retrieveTasks(token, callback) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest()

    xhr.onload = function () {
        const { status, responseText: json } = xhr

        if (status >= 500) {
            const { error } = JSON.parse(json)

            callback(new Error(error))

            return
        }

        const tasks = JSON.parse(json)

        callback(null, tasks)
    }

    xhr.open('GET', `http://localhost/tasks`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()
}

export default retrieveTasks