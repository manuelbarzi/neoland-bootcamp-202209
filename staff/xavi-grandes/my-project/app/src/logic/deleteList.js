/**
 * Deletes a post against API
 * 
 * @param {string} token The user token
 * @param {string} listId The post id
 */
export default function (token, listId) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new Error('token is empty')
    if (typeof listId !== 'string') throw new TypeError('listId is not a string')
    if (!listId.length) throw new Error('listId is empty')

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

            xhr.open('DELETE', `http://localhost/lists/${listId}`)
            xhr.setRequestHeader('Authorization', `Bearer ${token}`)

            xhr.send()
        })
}

