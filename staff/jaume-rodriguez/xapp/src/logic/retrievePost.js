function retrievePost(token, postId, callback) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new Error('token is empty')
    if (typeof postId !== 'string') throw new TypeError('postId is not a string')
    if (!postId.length) throw new Error('postId is empty')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest()

    xhr.onload = function () {
        const { status, responseText: json } = xhr

        if (status >= 500) {
            const { error } = JSON.parse(json)

            callback(new Error(error))

            return
        }

        const post = JSON.parse(json)

        callback(null, post)
    }

    xhr.open('GET', `http://localhost/posts/${postId}`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()
}

export default retrievePost