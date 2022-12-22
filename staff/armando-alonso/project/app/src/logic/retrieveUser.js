function retrieveUser(userId,) {

    return new Promise((resolve, reject) => {
    
        const xhr = new XMLHttpRequest()

        xhr.onload = function () {
            const { status, responseText: json } = xhr

            if (status >= 500) {
                const { error } = JSON.parse(json)

                reject(new Error(error))

                return
            }

            const user = JSON.parse(json)

            resolve(user)
        }

        xhr.open('GET', `http://localhost/users`)
        xhr.setRequestHeader('Authorization', `Bearer ${userId}`)
        xhr.send()
    })
}

/**
 * Attends the result of the authentication
 * 
 * @param {Error} error The authentication error
 * @param {string} userId The id of the user that authenticated
 */

export default retrieveUser