function retrieveMainAdventures(token) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new Error('token is empty')

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.onload = function () {
            const { status, responseText: json } = xhr

            if (status >= 500) {
                const { error } = JSON.parse(json)

                reject(new Error(error))

                return
            }

            const adventures = JSON.parse(json)
            return resolve(adventures)
        }

        xhr.open('GET', 'http://localhost/adventure/main')
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.send()
    })
}

export default retrieveMainAdventures