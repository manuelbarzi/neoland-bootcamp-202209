function createAdventureStep(token, adventureId, text) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new Error('token is empty')
    if (typeof text !== 'string') throw new TypeError('text is not a string')
    if (!text.length) throw new Error('text is empty')
    if (typeof adventureId !== 'string') throw new TypeError('adventureId is not a string')
    if (!adventureId.length) throw new Error('adventureId is empty')

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

        xhr.open('POST', `http://localhost/adventure/${adventureId}/step`)
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.setRequestHeader('Content-Type', 'application/json')

        const payload = { text }
        const json = JSON.stringify(payload)

        xhr.send(json)
    })
}

export default createAdventureStep