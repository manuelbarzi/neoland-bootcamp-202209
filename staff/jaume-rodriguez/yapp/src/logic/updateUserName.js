import { IS_ALPHABETICAL_REGEX } from '../utils/regex'

function updateUserName(newName, userId, callback) {
    if (typeof newName !== 'string') throw new Error('password is not a string')
    if (!IS_ALPHABETICAL_REGEX.test(newName)) throw new Error('name is not valid')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest()

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


    xhr.open('POST', 'http://localhost/users/updateUserName')
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { newName, userId }

    const json = JSON.stringify(payload)

    xhr.send(json)
}

export default updateUserName