function getOnePublication(userId, postId, callback) {
    
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
    xhr.setRequestHeader('Authorization', `Bearer ${userId}`)
    xhr.send()
}

export default getOnePublication