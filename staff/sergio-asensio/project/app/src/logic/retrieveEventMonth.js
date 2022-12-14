import { errors } from 'com'

const { FormatError, NotFoundError, UnexpectedError, AuthError, LengthError} = errors

export default function (token, month) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new LengthError('token is empty')

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.onload = function () {
            const { status, responseText: json } = xhr

            if (status >= 500) {
                const { error } = JSON.parse(json)

                reject(new Error(error))

                return
            }

            const event = JSON.parse(json)
                        

            resolve(event)
        }

        xhr.onerror = () => reject(new Error('connection error'))

        xhr.open('GET', `http://localhost/eventos/${month}`)
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.send()
    })

}