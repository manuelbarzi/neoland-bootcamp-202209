export default function (userId, callback) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is emmpty')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    xhr.onload = function () {
        const { status, responseText: json } = xhr

        if(status >= 500) { 
            const { error } = JSON.parse(json)

            callback(new Error(error))

            return
        }

        const posts = JSON.parse(json)

        callback(null, posts)
    }

    xhr.open('GET', 'http://localhost/posts/access')
    xhr.setRequestHeader('Authorization', `Bearer ${userId}`)
    xhr.send()
}

