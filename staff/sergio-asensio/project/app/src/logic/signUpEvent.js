import { errors } from 'com'
const { FormatError, NotFoundError, UnexpectedError, AuthError, LengthError} = errors
/**
 * Creates a post against API
 * 
 * @param {string} token The user token
 * @param {string} eventId The notice ID
 */
export default function (token, eventId) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new LengthError('token is empty')

    if (typeof eventId !== 'string') throw new TypeError('eventId is not a string')
    if (!eventId.length) throw new LengthError('eventId is empty')


    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest
    
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

        xhr.open('PATCH',`http://localhost/eventos/inscription/${eventId}`)
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.send()

    })
}