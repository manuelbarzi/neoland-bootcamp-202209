function updatePostVisibility(token, postId, newVisibility, callback) {
    if (typeof token !== 'string') throw new Error('token is not a string')
    if (typeof postId !== 'string') throw new Error('postId is not a string')
    if (typeof newVisibility !== 'string') throw new Error('newVisibility is not a string')
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


    xhr.open('PATCH', 'http://localhost/Posts')
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { token, postId, newVisibility }

    const json = JSON.stringify(payload)

    xhr.send(json)
}

export default updatePostVisibility