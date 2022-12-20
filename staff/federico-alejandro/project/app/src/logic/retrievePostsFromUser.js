import { LengthError } from "com/errors"
/**
 * Retrieves post from users
 * 
 * @param {string} token The token user 
 * @param {string} targetUserId The target user id 
 * 
 */
function retrievePostsFromUser(token, targetUserId) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new LengthError('token is empty')
    if (typeof targetUserId !== 'string') throw new TypeError('targetUserId is not a string')
    if (!targetUserId.length) throw new LengthError('targetUserId is empty')

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

            xhr.open('GET', `http://localhost/users/${targetUserId}/posts`)
            xhr.setRequestHeader('Authorization', `Bearer ${token}`)
            xhr.send()
        })
}

export default retrievePostsFromUser