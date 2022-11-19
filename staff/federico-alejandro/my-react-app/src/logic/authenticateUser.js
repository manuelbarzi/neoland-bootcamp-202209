import { IS_EMAIL_REGEX, HAS_SPACES_REGEX} from '../utils/regex'
/**
 * authenticates a user against API
 * 
 * @param {string} email the user email.
 * @param {string} password the user password.
 * @param {callback} callback  the callback to attend the result
 * 
 */

function authenticateUser(email, password, callback) {
    if (typeof email !== 'string') throw new Error ('email is not a string')
    if (!IS_EMAIL_REGEX.test(email)) throw new Error ('email is not valid')
    
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    if (typeof password !== 'string') throw new Error ('password is not a string')
    if (password.length < 8) throw new Error ('password length is less than 8')
    if (HAS_SPACES_REGEX.test(password)) throw new Error ('password has spaces')

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, responseText: json } = xhr

        if (status >= 500) {
            const { error } = JSON.parse(json)

            callback(new Error(error))

            return
        }

        const { userId } = JSON.parse(json)

        callback(null, userId)
    }

    xhr.onerror = () => callback(new Error('connection error'))

    xhr.open('POST', 'http://localhost/users/auth')
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { email, password }

    const json = JSON.stringify(payload)

    xhr.send(json)
}
/**
 * Attends the result of the authentication
 * 
 * @callback callback
 * 
 * @param {Error} error The authentication error
 * @param {string} userId The id of the user that authenticated
 */

export default authenticateUser