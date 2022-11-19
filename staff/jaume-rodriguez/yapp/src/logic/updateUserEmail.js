function updateUserEmail(newEmail, userId, callback) {
    if (typeof newEmail !== 'string') throw new Error('email is not a string')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

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


    xhr.open('POST', 'http://localhost/users/updateUserEmail')
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { newEmail, userId }

    const json = JSON.stringify(payload)

    xhr.send(json)
}

export default updateUserEmail