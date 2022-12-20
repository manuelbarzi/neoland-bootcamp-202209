import { errors } from 'com'
const { LengthError } = errors

export default function (token, vehicleId, brand, model, fuelType, license, licenseDate, kms, lastOilCheckDate, lastOilCheckKms, lastItvDate,
    tyrePressureFront, tyrePressureRear) {

    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new LengthError('token is empty')

    if (typeof vehicleId !== 'string') throw new TypeError('vehicleId is not a string')
    if (!vehicleId.length) throw new LengthError('vehicleId is empty')

    if (typeof brand !== 'string') throw new TypeError('brand is not a string')
    if (!brand.length) throw new LengthError('brand is empty')

    if (typeof model !== 'string') throw new TypeError('model is not a string')
    if (!model.length) throw new LengthError('model is empty')

    if (typeof fuelType !== 'string') throw new TypeError('type is not a string')
    if (!fuelType.length) throw new LengthError('type is empty')
    
    if (typeof license !== 'string') throw new TypeError('license is not a string')
    if (!license.length) throw new LengthError('license is empty')

    if (!(licenseDate instanceof Date)) throw new TypeError('licenseDate is not date')

    if (typeof kms !== 'number') throw new TypeError('kms is not a number')

    if (!(lastOilCheckDate instanceof Date)) throw new TypeError('last oil check date is not a Date')

    if (typeof lastOilCheckKms !== 'number') throw new TypeError('last oil check kms is not a number')

    if (!(lastItvDate instanceof Date)) throw new TypeError('last itv date is not a Date')

    if (typeof tyrePressureFront !== 'string') throw new TypeError('tyre pressure front is not a string')
    if (!tyrePressureFront.length) throw new LengthError('tyre pressure front is empty')

    if (typeof tyrePressureRear !== 'string') throw new TypeError('tyre pressure rear is not a string')
    if (!tyrePressureRear.length) throw new LengthError('tyre pressure rear is empty')

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

        xhr.open('PATCH', `http://localhost/vehicles/${vehicleId}`)
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.setRequestHeader('Content-Type', 'application/json')

        const payload = {
            brand, model, fuelType, license, licenseDate, kms, lastOilCheckDate, 
            lastOilCheckKms, lastItvDate, tyrePressureFront, tyrePressureRear
        }

        const json = JSON.stringify(payload)

        xhr.send(json)
    })
}