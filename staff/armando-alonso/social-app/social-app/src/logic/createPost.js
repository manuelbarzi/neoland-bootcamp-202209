export default function(userId, text, visibility) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof text !== 'string') throw new TypeError('text is not a string')
    if (!text.length) throw new Error('text is empty')
    if (typeof visibility !== 'string') throw new TypeError('visibility is not a string')
    if (!visibility.length) throw new Error('visibility is empty')
    if (visibility !== 'public' && visibility !== 'private') throw new Error('invalid visibility')

    return new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, responseText: json } = xhr

        if ( status >= 500) {
            const { error } = JSON.parse(json)

            reject(new Error(error))

            return
        }

        resolve()
    }

    xhr.onerror = () => reject(new Error('connection error'))

    xhr.open('POST', 'http://localhost/posts')
    xhr.setRequestHeader('Authorization', `Bearer ${userId}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { text, visibility }

    const json = JSON.stringify(payload)

    xhr.send(json)

    })
}

