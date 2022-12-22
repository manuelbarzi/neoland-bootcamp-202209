export default function(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')


    return new Promise((resolve, reject) =>    {
        const xhr = new XMLHttpRequest

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

    xhr.open('GET', `http://localhost/posts/`)
    xhr.setRequestHeader('Authorization', `Bearer ${userId}`)
    xhr.send()
    })

    
}