import { LengthError } from "com/errors"
/**
 * Delete a post against API
 * 
 * @param {string} token The user token
 * @param {string} postId The post postId
 */
function retrievePost(token, postId) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new LengthError('token is empty')
    if (typeof postId !== 'string') throw new TypeError('postId is not a string')
    if (!postId.length) throw new LengthError('postId is empty')

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.onload = function () {
                const { status, responseText: json } = xhr

                if (status >= 500) {
                    const { error } = JSON.parse(json)

                    reject(new Error(error))

                    return
                }

                const post = JSON.parse(json)

                resolve(post)
            }
            
            xhr.onerror = () => reject(new Error('connection error'))

            xhr.open('GET', `http://localhost/posts/${postId}`)
            xhr.setRequestHeader('Authorization', `Bearer ${token}`)
            xhr.send()
        })
}

export default retrievePost