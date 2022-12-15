import { errors } from 'com'

const { FormatError, UnexpectedError, AuthError, NotFoundError } = errors

export default function (token, listId) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new Error('token is empty')
    if (typeof listId !== 'string') throw new TypeError('listId is not a string')
    if (!listId.length) throw new Error('listId is empty')

    return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest

    xhr.onload = function () {
        const { status, responseText: json } = xhr

        if (status === 200) {
            const lists = JSON.parse(json)

            resolve(lists)
        } else if (status === 400) {
            const { error } = JSON.parse(json)

            if (error.includes('is not a'))
                reject(new TypeError(error))
            else if (error.includes('empty'))
                reject(new FormatError(error))
        } else if (status === 401) {
            const { error } = JSON.parse(json)

            reject(new AuthError(error))
        } else if (status === 404) {
            const { error } = JSON.parse(json)

            reject(new NotFoundError(error))
        } else if (status < 500)
            reject(new UnexpectedError('client error'))
        else
            reject(new UnexpectedError('server error'))
    }

    xhr.open("GET", `http://localhost/lists/${listId}/items`);
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()
    })
}