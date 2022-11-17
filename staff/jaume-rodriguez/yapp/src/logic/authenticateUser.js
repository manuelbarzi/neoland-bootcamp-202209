function authenticateUser(email, password, callback) {
    if (typeof email !== 'string') throw new TypeError('email is not a string')

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const json = xhr.responseText

        if (xhr.status !== 200) {
            const { error } = JSON.parse(json);
            callback(error)
        } else {
            const { userId } = JSON.parse(json)
            callback(null, userId)
        }
    };

    xhr.onerror = () => callback(new Error('connection error'))


    xhr.open('POST', 'http://localhost/auth')
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { email, password }

    const json = JSON.stringify(payload)

    xhr.send(json)
}

export default authenticateUser