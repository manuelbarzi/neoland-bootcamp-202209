function updateUserEmail(newEmail, token) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new Error('token is empty')
    if (typeof newEmail !== 'string') throw new Error('email is not a string')
    if (!newEmail.length) throw new Error('newEmail is empty')

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

        xhr.open('PATCH', `http://localhost/users/updateUserEmail`)
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.setRequestHeader('Content-Type', 'application/json')

        const payload = { newEmail }
        const json = JSON.stringify(payload)

        xhr.send(json)
    })
}

export default updateUserEmail