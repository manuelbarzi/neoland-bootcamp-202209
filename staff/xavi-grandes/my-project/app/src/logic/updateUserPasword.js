import { regex } from 'com'
const { HAS_SPACES_REGEX } = regex

/**
 * Update User Passwrod
 * 
 * @param {string} token userId client 
 * @param {string} password actual password of client
 * @param {string} newPassword new password to change
 */

export default function (token, password, newPassword) {
    if(typeof token !== 'string') throw new TypeError ('token is not a string')
    if(!token.length) throw new Error('token is empty')
    if(typeof password !== 'string') throw new TypeError('password is not a string')
    if(!password.length) throw new Error('password is empty')
    if (HAS_SPACES_REGEX.test(password)) throw new Error('password has spaces')
    // cambiar test to project
    if(typeof newPassword !== 'string') throw new TypeError('newPassword is not a string')
    if(!newPassword.length) throw new Error('newPassword is empty')
    if (HAS_SPACES_REGEX.test(newPassword)) throw new Error('newPassword has spaces')

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest
        
        xhr.onload = () => {
            const { status, responseText: json } = xhr

            if (status >=500){
                const {error} = JSON.parse(json)

                reject(new Error(error))

            return
            }

            resolve()

        }

        xhr.onerror = () => reject(new Error('connection error'))

        xhr.open('PATCH', `http://localhost/users/password`)
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.setRequestHeader('Content-Type', 'application/json')

        const payload = { password, newPassword }
        const json = JSON.stringify(payload)

        xhr.send(json)
    })

}