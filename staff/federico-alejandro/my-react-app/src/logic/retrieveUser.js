function retrieveUser(userId, callback) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    xhr.onload = function () {
        const { status, responseText: json } = xhr

        if (status >= 500) {
            const { error } = JSON.parse(json)

            callback(new Error(error))

            return
        }

        const user = JSON.parse(json)

        callback(null, user)
    }

    xhr.open('GET', 'http://localhost/users')
    xhr.setRequestHeader('Authorization', `Bearer ${userId}`)
    xhr.send()
}
export default retrieveUser