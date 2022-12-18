import { errors } from 'com'
const { LengthError } = errors

export default function(token, brand, model, type, license, licenseDate, kms) {
    if(typeof token !== 'string') throw new TypeError('token is not a string')
    if(!token.length) throw new LengthError('token is empty')

    if(typeof brand !== 'string') throw new TypeError('brand is not a string')
    if(!brand.length) throw new LengthError('brand is empty')

    if(typeof model !== 'string') throw new TypeError('model is not a string')
    if(!model.length) throw new LengthError('model is empty')

    if(typeof type !== 'string') throw new TypeError('type is not a string')
    if(!type.length) throw new LengthError('type is empty')

    if(typeof license !== 'string') throw new TypeError('license is not a string')
    if(!license.length) throw new LengthError('license is empty')

    if(typeof licenseDate !== 'Date') throw new TypeError('licenseDate is not a date')
    
    if(typeof kms !== 'string') throw new TypeError('kms is not a string')
    if(!kms.length) throw new LengthError('kms is empty')

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest

        xhr.onload = () => {
            const { status, responseText: json } = xhr

            if(status >= 500) {
                const { error } = JSON.parse(json)

                reject(new Error(error))

                return
            }

            resolve(null)
        }

        xhr.onerror = () => reject(new Error('connection error'))

        xhr.open('PATCH', `http://localhost/vehicles/${vehicleId}`)
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.setRequestHeader('Content-Type', 'application/json')

        const payload = { brand, model, type, license, licenseDate, kms, gas }

        const json = JSON.stringify(payload)

        xhr.send(json)
    })
}