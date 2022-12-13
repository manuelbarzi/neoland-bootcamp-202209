import { errors } from 'com'
const { FormatError, NotFoundError, UnexpectedError, AuthError, LengthError} = errors

/**
 * Creates a post against API
 * 
 * @param {string} token The user token
 * @param {string} title The notice title
 * @param {string} body The notice body
 */
export default function (token,month, title, body, requeriment, capacity, date, inscription, img) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new LengthError('token is empty')

    if (typeof month !== 'string') throw new TypeError('month is not a string')
    if (!month.length) throw new LengthError('month is empty')
    if (month !== 'january' && month !== 'february' && month !== 'march' && month !== 'april' && month !== 'may' && month !== 'june' && month !== 'july' && month !== 'august' && month !== 'september' && month !== 'october' && month !== 'november' && month !== 'december') throw new Error('its not a month')

    if (typeof title !== 'string') throw new TypeError('title is not a string')
    if (!title.length) throw new LengthError('title is empty')

    if (typeof body !== 'string') throw new TypeError('body is not a string')
    if (!body.length) throw new LengthError('body is empty')

    if (typeof requeriment !== 'string') throw new TypeError('requeriment is not a string')
    if (!requeriment.length) throw new LengthError('requeriment is empty')

    if (typeof capacity !== 'number') throw new TypeError('capacity is not a number')
    if (!capacity) throw new LengthError('capacity is empty')


    if (typeof date !== 'string') throw new TypeError('date is not a string')
    if (!date.length) throw new LengthError('date is empty')

    if (typeof inscription !== 'string') throw new TypeError('inscription is not a string')
    if (inscription !== 'close' && inscription !== 'open') throw new Error('invalid inscription')
    if (!inscription.length) throw new LengthError('inscription is empty')


    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest
    

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

        xhr.open('POST', 'http://localhost/eventos')
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.setRequestHeader('Content-Type', 'application/json')

        const payload = { month, title, body, requeriment, capacity, date, inscription, img  }

        const json = JSON.stringify(payload)

        xhr.send(json)

    })


}