function createPost(userId, visibilityPost, callback) {
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


    xhr.open('POST', 'http://localhost/posts')
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { userId, visibilityPost }

    const json = JSON.stringify(payload)

    xhr.send(json)
}

export default createPost