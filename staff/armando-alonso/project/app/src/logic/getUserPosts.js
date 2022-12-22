function getUserPosts(userId, targetUserId, callback) {
    
    const xhr = new XMLHttpRequest()

    xhr.onload = function () {
        const { status, responseText: json } = xhr

        if (status >= 500) {
            const { error } = JSON.parse(json)

            callback(new Error(error))

            return
        }

        const news = JSON.parse(json)

        callback(null, news)
    }

    xhr.open('GET', `http://localhost//users/${targetUserId}/posts`)
    xhr.setRequestHeader('Authorization', `Bearer ${userId}`)
    xhr.send()
}

export default getUserPosts