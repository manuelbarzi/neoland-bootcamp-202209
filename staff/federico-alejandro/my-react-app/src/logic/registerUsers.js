import { IS_ALPHABETICAL_REGEX, IS_EMAIL_REGEX, HAS_SPACES_REGEX } from '../utils/regex'

/**
 * Registers a user in API
 * 
 * @param {string} name the user name.
 * @param {string} email the user email.
 * @param {string} password the user password.
 * @param {callback} callback the callback to attend the result
 * 
 */
function registerUser(name, email, password, callback) {
    if (typeof name !== 'string') throw new Error ('name is not a string')
    if (name.length < 2) throw new Error('name length is less than 2')
    if (!IS_ALPHABETICAL_REGEX.test(name)) throw new Error ('name is not alphabetical')
    
    if (typeof email !== 'string') throw new Error ('email is not a string')
    if (!IS_EMAIL_REGEX.test(email)) throw new Error ('email is not valid')

    if (typeof password !== 'string') throw new Error ('password is not a string')
    if (password.length < 8) throw new Error ('password length is less than 8')
    if (HAS_SPACES_REGEX.test(password)) throw new Error ('password has spaces')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, responseText: json } = xhr

        if (status >= 500) {
            const { error } = JSON.parse(json)

            callback(new Error(error))

            return
        }

        callback(null)
    }

    xhr.onerror = () => callback(new Error('connection error'))

    xhr.open('POST', 'http://localhost/users')
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { name, email, password }

    const json = JSON.stringify(payload)

    xhr.send(json)
}
/**
 * Attends the result of the register
 * 
 * @callback callback
 * 
 * @param {Error} error The authentication error
 */
export default registerUser