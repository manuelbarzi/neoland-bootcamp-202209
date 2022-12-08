/**
 * Creates a post against API
 * 
 * @param {string} token The user token
 * @param {string} title The notice title
 * @param {string} body The notice body
 */
export default function (token, title, body) {
    if (typeof token !== 'string') throw new TypeError('userId is not a string')
    if (!token.length) throw new Error('userId is empty')
    if (typeof title !== 'string') throw new TypeError('title is not a string')
    if (!title.length) throw new Error('text is empty')
    if (typeof body !== 'string') throw new TypeError('body is not a string')
    if (!body.length) throw new Error('body is empty')


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

        xhr.open('PATCH', 'http://localhost/noticias')
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.setRequestHeader('Content-Type', 'application/json')

        const payload = { title, body }

        const json = JSON.stringify(payload)

        xhr.send(json)

    })
}