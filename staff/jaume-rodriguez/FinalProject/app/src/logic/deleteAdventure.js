import { errors, validators } from 'com'
const { FormatError, ConflictError, LengthError, UnexpectedError } = errors
const { validateAdventureId, validateToken } = validators

function deleteAdventure(token, adventureId) {
    validateToken(token)
    validateAdventureId(adventureId)

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.onload = () => {
            const { status, responseText: json } = xhr

            if (status === 204)
                resolve()
            else if (status === 400) {
                const { error } = JSON.parse(json)

                if (error.includes('is not a'))
                    reject(new TypeError(error))
                else if (error.includes('empty'))
                    reject(new FormatError(error))
                else if (error.includes('length'))
                    reject(new LengthError(error))
            } else if (status === 409) {
                const { error } = JSON.parse(json)

                reject(new ConflictError(error))
            } else if (status < 500)
                reject(new UnexpectedError('client error'))
            else
                reject(new UnexpectedError('server error'))
        }

        xhr.onerror = () => reject(new Error('connection error'))

        xhr.open('DELETE', `${process.env.REACT_APP_API_URL}/adventure/${adventureId}`)
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)

        xhr.send()
    })
}

export default deleteAdventure