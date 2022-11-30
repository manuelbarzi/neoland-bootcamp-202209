function updateUserEmail(newEmail, token, callback) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new Error('token is empty')
    if (typeof newEmail !== 'string') throw new Error('email is not a string')
    if (!newEmail.length) throw new Error('newEmail is empty')
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

    xhr.open('PATCH', `http://localhost/users/updateUserEmail`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { newEmail }

    const json = JSON.stringify(payload)

    xhr.send(json)
}

export default updateUserEmail