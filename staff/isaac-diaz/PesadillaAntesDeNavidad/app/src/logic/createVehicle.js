import { errors, regex } from 'com'
const { LengthError, FormatError } = errors
const { IS_ALPHABETICAL_REGEX } = regex


export default function createVehicle(token, brand, model, type, license, licenseDate, kms) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new LengthError('token is empty')

    if (typeof brand !== 'string') throw new TypeError('brand is not a string')
    if (!brand.length) throw new LengthError('brand is empty')

    if (typeof model !== 'string') throw new TypeError('model is not a string')
    if (!model.length) throw new LengthError('model is empty')

    if (typeof type !== 'string') throw new TypeError('type is not a string')
    if (!type.length) throw new LengthError('type is empty')
    if (!IS_ALPHABETICAL_REGEX.test(type)) throw new FormatError('type is not alphabetical')

    if (typeof license !== 'string') throw new TypeError('license is not a string')
    if (!license.length) throw new LengthError('license is emmpty')
    if (license.length > 7) throw new FormatError('license not granted')

    if (!licenseDate instanceof Date) throw new TypeError('licenseDate is not a date')

    if (typeof kms !== 'string') throw new TypeError('kms is not a string')
    if (!kms.length) throw new LengthError('kms is empty')

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.onload = () => {
            const { status, responseText: json } = xhr

            if (status === 201)
                resolve()
            else if (status === 400) {
                const { error } = JSON.parse(json)
                if (error.includes('is not a string'))
                    reject(new TypeError(error))
                else if (error.includes('is not alphabetical') || error.includes('not granted'))
                    reject(new FormatError(error))
                else if (error.includes('empty'))
                    reject(new LengthError(error))
                else
                    reject(new Error(error))
            }
        }


        xhr.onerror = () => reject(new Error('connection error'))

        xhr.open('POST', 'http://localhost/vehicle')
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.setRequestHeader('Content-Type', 'application/json')

        const payload = { brand, model, type, license, licenseDate, kms }

        const json = JSON.stringify(payload)

        xhr.send(json)
    })
}
