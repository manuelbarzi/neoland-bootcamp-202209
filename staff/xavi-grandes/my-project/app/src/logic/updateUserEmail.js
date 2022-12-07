/**
 * Update user email
 * 
 * @param {string} token Client 
 * @param {string} newEmail The new email that client wants.
 */

export default function (token, newEmail) {
if (typeof token !== 'string') throw new TypeError ('token is not a string')
if (!token.length) throw new Error('token is empty')

if (typeof newEmail !== 'string') throw new TypeError('newEmail is not a string')
if (!newEmail.length) throw new Error('newEmail is empty')
// regex

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

    xhr.open('PATCH', `http://localhost/users/email`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { newEmail }
    const json = JSON.stringify(payload)

    xhr.send(json)
})
}