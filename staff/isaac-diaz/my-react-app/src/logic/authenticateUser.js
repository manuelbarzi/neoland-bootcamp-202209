function authenticateUser(email, password, callback) {
    if(typeof email !== 'string') throw new TypeError('email is not a string')
    if (email)
    if(typeof password !== 'string') throw new TypeError('password is not a string')
    if(password.length < 8) throw new Error('Need eigth carachters')
    if(callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const json = xhr.responseText

        const { userId } = JSON.parse(json)

        callback(null, userId)
    }

    xhr.onerror = () => callback(new Error('connection error'))

    xhr.open('POST', 'http://localhost/auth')
    xhr.setRequestHeader('Content-type', 'application/json')

    const playload = { email, password }

    const json = JSON. stringify(playload)

    xhr.send(json)
} 

export default authenticateUser