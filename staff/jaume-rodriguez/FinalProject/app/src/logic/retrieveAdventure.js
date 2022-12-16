function retrieveAdventure(token, adventureId) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new Error('token is empty')
    if (typeof adventureId !== 'string') throw new TypeError('adventureId is not a string')
    if (!adventureId.length) throw new Error('adventureId is empty')

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.onload = function () {
            const { status, responseText: json } = xhr

            if (status >= 500) {
                const { error } = JSON.parse(json)

                reject(new Error(error))

                return
            }

            const adventure = JSON.parse(json)
            return resolve(adventure)
        }

        xhr.open('GET', `http://localhost/adventure/${adventureId}`)
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.send()
    })
}

export default retrieveAdventure