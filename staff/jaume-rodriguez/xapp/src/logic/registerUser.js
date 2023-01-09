import { errors, validators } from 'mycommons'
const { FormatError, AuthError, LengthError, NotFoundError, UnexpectedError } = errors
const { validateName, validateEmail, validatePassword } = validators

function registerUser(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest()

        xhr.onload = () => {
            const { status, responseText: json } = xhr

            if (status === 201) {
                const { token } = JSON.parse(json)

                resolve(token)
            } else if (status === 400) {
                const { error } = JSON.parse(json)

                if (error.includes('is not a'))
                    reject(new TypeError(error))
                else if (error.includes('valid') || error.includes('spaces'))
                    reject(new FormatError(error))
                else if (error.includes('length'))
                    reject(new LengthError(error))
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

        xhr.onerror = () => reject(new Error('connection error'))

        xhr.open('POST', 'http://localhost/users')
        xhr.setRequestHeader('Content-Type', 'application/json')

        const payload = { name, email, password }
        const json = JSON.stringify(payload)

        xhr.send(json)
    })
}

export default registerUser