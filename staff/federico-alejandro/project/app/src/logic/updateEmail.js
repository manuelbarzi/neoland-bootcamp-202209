import { LengthError } from "com/errors"

function updateEmail(token, email) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new LengthError('token is empty')

    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (!email.length) throw new LengthError('email is empty')

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

        xhr.open('PATCH', 'http://localhost/users/settings')
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.setRequestHeader('Content-Type', 'application/json')

        const payload = { email }

        const json = JSON.stringify(payload)

        xhr.send(json)
    })
}

export default updateEmail