const { errors: { LengthError } } = require('com')
/**
 * Creates a comment against API
 * 
 * @param {string} token The user token
 * @param {string} text The comment text
 * @param {string} postId The post id

 */
function createComment(token, text, postId) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new LengthError('token is empty')

    if (typeof text !== 'string') throw new TypeError('text is not a string')
    if (!text.length) throw new LengthError('text is empty')
    
    if (typeof postId !== 'string') throw new TypeError('postId is not a string')
    if (!postId.length) throw new LengthError('postId is empty')
    


        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

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
            
            xhr.open('POST', `http://localhost/posts/${postId}/comments`)
            xhr.setRequestHeader('Authorization', `Bearer ${token}`)
            xhr.setRequestHeader('Content-Type', 'application/json')
            
            const payload = { text }
            
            const json = JSON.stringify(payload)
            
            xhr.send(json)
        })
    }
    export default createComment