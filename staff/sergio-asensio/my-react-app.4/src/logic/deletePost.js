/**
 * Deletes a post against API
 * 
 * @param {string} userId The user id
 * @param {string} postId The post id
 * @param {callback} callback The callback to attend the result
 */
 export default function(userId, postId, callback) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof postId !== 'string') throw new TypeError('postId is not a string')
    if (!postId.length) throw new Error('postId is empty')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')
    
    const xhr = new XMLHttpRequest

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

    xhr.open('DELETE', `http://localhost/posts/${postId}`)
    xhr.setRequestHeader('Authorization', `Bearer ${userId}`)

    xhr.send()
}

/**
 * Attends the result of the post deletion
 * 
 * @callback callback
 * 
 * @param {Error} error The authentication error
 */