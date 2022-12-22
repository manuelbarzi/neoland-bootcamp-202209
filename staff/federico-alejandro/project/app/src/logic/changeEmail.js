import { regex, errors } from 'com'
const { IS_EMAIL_REGEX } = regex
const { LengthError } = errors/**
 * Update User email
 * 
 * @param {string} token userId client 
 * @param {string} email old email
 * @param {string} newEmail new email 
 */

function updateEmail(token, email, newEmail) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new LengthError('token is empty')

    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (!email.length) throw new LengthError('email is empty')
    if (!IS_EMAIL_REGEX.test(email)) throw new Error('email is not valid')

    
    if (typeof newEmail !== 'string') throw new TypeError('newEmail is not a string')
    if (!newEmail.length) throw new LengthError('newEmail is empty')
    if (!IS_EMAIL_REGEX.test(email)) throw new Error('email is not valid')


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

        const payload = { email, newEmail }

        const json = JSON.stringify(payload)

        xhr.send(json)
    })
}

export default updateEmail