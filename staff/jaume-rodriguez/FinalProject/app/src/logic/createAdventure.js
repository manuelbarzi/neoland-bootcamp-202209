function createAdventure(token, title, isMainAdventure) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new Error('token is empty')
    if (typeof title !== 'string') throw new TypeError('title is not a string')
    if (!title.length) throw new Error('title is empty')
    if (typeof isMainAdventure !== 'string') throw new TypeError('isMainAdventure is not a string')
    if (!isMainAdventure.length) throw new Error('isMainAdventure is empty')

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

        xhr.open('POST', 'http://localhost/adventure')
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.setRequestHeader('Content-Type', 'application/json')

        const payload = { title, isMainAdventure }
        const json = JSON.stringify(payload)

        xhr.send(json)
    })
}

export default createAdventure