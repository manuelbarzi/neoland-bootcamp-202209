function retrieveUser(userId, targetUserId, callback) {
    
    const xhr = new XMLHttpRequest()

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

    xhr.open('GET', `http://localhost/users/${targetUserId}`)
    xhr.setRequestHeader('Authorization', `Bearer ${userId}`)
    xhr.send()
}

/**
 * Attends the result of the authentication
 * 
 * @callback callback
 * 
 * @param {Error} error The authentication error
 * @param {string} userId The id of the user that authenticated
 */

export default retrieveUser