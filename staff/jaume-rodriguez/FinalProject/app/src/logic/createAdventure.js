import { errors, validators } from 'com'
const { FormatError, ConflictError, LengthError, UnexpectedError } = errors
const { validateTitle, validateToken, validateIsMainAdventure, validateCreateGoldEnough } = validators

function createAdventure(token, title, isMainAdventure, gold) {
    validateToken(token)
    validateTitle(title)
    validateIsMainAdventure(isMainAdventure)
    validateCreateGoldEnough(gold)

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.onload = () => {
            const { status, responseText: json } = xhr

            if (status === 201)
                resolve()
            else if (status === 400) {
                const { error } = JSON.parse(json)

                if (error.includes('is not a'))
                    reject(new TypeError(error))
                else if (error.includes('empty'))
                    reject(new FormatError(error))
                else if (error.includes('valid') || error.includes('spaces'))
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
            resolve()
        }

        xhr.onerror = () => reject(new Error('connection error'))

        xhr.open('POST', `${process.env.REACT_APP_API_URL}/adventure`)
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.setRequestHeader('Content-Type', 'application/json')

        const payload = { title, isMainAdventure }
        const json = JSON.stringify(payload)

        xhr.send(json)
    })
}

export default createAdventure