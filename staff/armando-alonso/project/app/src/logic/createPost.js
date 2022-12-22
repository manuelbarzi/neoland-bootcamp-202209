/**
 * Authenticates a user against API
 * 
 * @param {string} userId The id for the user
 * @param {string} title The title for the post
 * @param {string} resume The resume for the post
 * @param {string} text The text for the post
 * @param {string} topic The user topic
 * @param {string} visibility The user visibility
 * 
 */

function createPost( userId, title, resume, text, topic, visibility, municipio, img) {

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest()

        xhr.onload = () => {
            const { status, responseText: json } = xhr

            if (status >= 500) {
                const { error } = JSON.parse(json)

                reject(new Error(error))

                return 
            }

            resolve(null)
        }

        xhr.onerror = () => reject(new Error('connection error'))

        
        xhr.open('POST', 'http://localhost/post')
        xhr.setRequestHeader('Authorization', `Bearer ${userId}`)
        xhr.setRequestHeader('Content-Type', 'application/json')

        const payload = { title, resume, text, topic, visibility, municipio, img }

        const json = JSON.stringify(payload)

        xhr.send(json)

    })
}

/**
 * Attends the result of the Post Creation
 * 
 * @param {Error} error The authentication error
 */

export default createPost