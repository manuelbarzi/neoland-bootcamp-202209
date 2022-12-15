/**
 * Deletes a post against API
 * 
 * @param {string} itemId The item id
 */
export default function (itemId) {
    if (typeof itemId !== 'string') throw new TypeError('itemId is not a string')
    if (!itemId.length) throw new Error('itemId is empty')

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

            xhr.open('DELETE', `http://localhost/items/${itemId}`)

            xhr.send()
        })
}
