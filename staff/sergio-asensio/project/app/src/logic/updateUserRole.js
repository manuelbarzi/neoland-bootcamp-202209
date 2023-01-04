import { errors } from 'com'

const { FormatError, NotFoundError, UnexpectedError, AuthError, LengthError} = errors

/**
 * Creates a post against API
 * 
 * @param {string} token The user token
 * @param {string} user The user to update Role
 * @param {string} role The role 
 */
export default function (token, user, role) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new LengthError('token is empty')
    if (typeof user !== 'string') throw new TypeError('user is not a string')
    if (!user.length) throw new LengthError('user is empty')
    if (typeof role !== 'string') throw new TypeError('role is not a string')
    if (!role.length) throw new LengthError('role is empty')

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

        xhr.open('PATCH',`http://localhost/users/${user}`)
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.setRequestHeader('Content-Type', 'application/json')

        const payload = { role }

        const json = JSON.stringify(payload)

        xhr.send(json)

    })
}