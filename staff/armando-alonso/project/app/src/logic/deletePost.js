

/**
 * Delete Publication against API
 * 
 * @param {string} email The user email
 * @param {string} password The user password
 * @param {callback} callback The callback to attend the result
 */
function deletePost( userId, postId ) {
    
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest

        xhr.onload = () => {
            const { status, responseText: json } = xhr

            if (status >= 500) {
                const { error } = JSON.parse(json)

                reject(new Error(error))

                return
            }
 
            resolve()
        }

        xhr.onerror = () => reject(new Error('connection error'))

        xhr.open('DELETE', `http://localhost/posts/${postId}`)
        xhr.setRequestHeader('Authorization', `Bearer ${userId}`)

        xhr.send()
    })
}

/**
 * Attends the result of the authentication
 * 
 * @callback callback
 * 
 * @param {Error} error The authentication error
 * @param {string} userId The id of the user that authenticated
 */

export default deletePost