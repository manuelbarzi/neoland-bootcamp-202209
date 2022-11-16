function authenticateUser(email, password, callback) {
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (!email.length) throw new Error('email is empty')
    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (!password.length) throw new Error('password is empty')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const json = xhr.responseText

        const { userId } = JSON.parse(json)

        callback(null, userId)
    }

    xhr.onerror = () => callback(new Error('connection error'))

    
    xhr.open('POST', 'http://localhost/auth')
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { email, password }

    const json = JSON.stringify(payload)

    xhr.send(json)
}

export default authenticateUser