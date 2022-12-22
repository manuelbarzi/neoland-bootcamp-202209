/**
 * Authenticates a user against API
 * 
 * @param {string} userId The userId
 * 
 */

function getSessionPosts(userId) {

    return new Promise((resolve, reject) => {
    
        const xhr = new XMLHttpRequest()

        xhr.onload = function () {
            const { status, responseText: json } = xhr

            if (status >= 500) {
                const { error } = JSON.parse(json)

                reject(new Error(error))

                return
            }

            const posts = JSON.parse(json)

            resolve(posts)
        }

        xhr.onerror = () => reject(new Error('connection error'))

        xhr.open('GET', `http://localhost/posts/session`)
        xhr.setRequestHeader('Authorization', `Bearer ${userId}`)
        xhr.send()
    })
}

export default getSessionPosts