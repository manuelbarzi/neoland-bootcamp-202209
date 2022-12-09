/**
 * Creates a post against API
 * 
 * @param {string} token The user token
 * @param {string} noticeId The notice title
 */
export default function (token, noticeId) {
    if (typeof token !== 'string') throw new TypeError('userId is not a string')
    if (!token.length) throw new Error('userId is empty')
    if (typeof noticeId !== 'string') throw new TypeError('noticeId is not a string')
    if (!noticeId.length) throw new Error('noticeId is empty')



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

        xhr.open('DELETE',`http://localhost/noticias/${noticeId}`)
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)


        xhr.send()

    })
}