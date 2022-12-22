import { regex, errors } from 'com'

const { IS_EMAIL_REGEX, HAS_SPACES_REGEX } = regex
const { FormatError, AuthError, LengthError, NotFoundError, UnexpectedError } = errors

/**
 * Authenticates a user
 * 
 * @param {string} token The token 
 * @param {string} userName The userName
 */

export default function createGame(token, userName) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new FormatError('token is empty')
    if(typeof userName !== 'string') throw new TypeError('userName is not string')
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.onload = function () {
            const { status, responseText: json } = xhr

            if (status === 200) {
                const game = JSON.parse(json)
                resolve(game)
            } else if (status === 400) {
                const { error } = JSON.parse(json)
                if (error.includes('is not a'))
                    reject(new TypeError(error))
                else if (error.includes('empty'))
                    reject(new FormatError(error))
                } else if (status === 500) {
                    const { error } = JSON.parse(json)
                    if (error.includes('have a game'))
                        reject(new TypeError(error))
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

        xhr.open('GET', 'http://localhost:2000/matchMaking/users/${userName}')
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)

        xhr.send()
    })
}