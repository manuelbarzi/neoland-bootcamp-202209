import { LengthError } from "com/errors"

function updatePassword(token, password) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new LengthError('token is empty')

    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (!password.length) throw new LengthError('password is empty')

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

        const payload = { password }

        const json = JSON.stringify(payload)

        xhr.send(json)
    })
}

export default updatePassword