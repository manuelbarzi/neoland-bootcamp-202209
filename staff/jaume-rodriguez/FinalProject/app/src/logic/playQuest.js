function playQuest(token, questId) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new Error('token is empty')
    if (typeof questId !== 'string') throw new TypeError('questId is not a string')
    if (!questId.length) throw new Error('questId is empty')

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

        xhr.open('PUT', `http://localhost/quest/${questId}/play`)
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send()
    })
}

export default playQuest