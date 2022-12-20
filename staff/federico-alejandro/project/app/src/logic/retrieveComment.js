function retrieveComment(token, postId, chatId, commentId) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new Error('token is empty')

    if (typeof postId !== 'string') throw new TypeError('postId is not a string')
    if (!postId.length) throw new Error('postId is empty')

    if (typeof chatId !== 'string') throw new TypeError('chatId is not a string')
    if (!chatId.length) throw new Error('chatId is empty')
    
    if (typeof commentId !== 'string') throw new TypeError('commentId is not a string')
    if (!commentId.length) throw new Error('commentId is empty')

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.onload = function () {
            const { status, responseText: json } = xhr

            if (status >= 500) {
                const { error } = JSON.parse(json)

                reject(new Error(error))

                return
            }

            const commentId = JSON.parse(json)

            resolve(commentId)
        }

        xhr.onerror = () => reject(new Error('connection error'))

        xhr.open('GET', `http://localhost/posts/${postId}/chats/${chatId}/comments/${commentId}`)
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.send()
    })
}

export default retrieveComment