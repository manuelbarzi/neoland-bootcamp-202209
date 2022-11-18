import { IS_EMAIL_REGEX, HAS_SPACES_REGEX } from '../utils/regex'

/**
 * Authenticates a user against API
 * 
 * @param {string} email The user email
 * @param {string} password The user password
 * @param {callback} callback The callback to attend the result
 */

function authenticateUser(email, password, callback){
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (!IS_EMAIL_REGEX.test(email)) throw new Error('email is not valid')

    if (typeof password !== 'string') throw new Error('password is not a string')
    if (password.length < 8) throw new Error('password length is less than 8')
    if (HAS_SPACES_REGEX.test(password)) throw new Error('password has spaces')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    xhr.onload = () => {

        const json = xhr.responseText

        const { userId } = JSON.parse(json)

        callback(null, userId)
    }

    xhr.onerror = () => callback(new Error('connection error'))

    xhr.open ('POST', 'http://localhost/auth')
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = {email, password}

    const body = JSON.stringify(payload)

    xhr.send(body)
}

export default authenticateUser