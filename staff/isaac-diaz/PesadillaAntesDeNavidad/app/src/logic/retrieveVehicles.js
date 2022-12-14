import { errors } from 'com'
const { LengthError } = errors

export default function retrieveVehicles(token) {
    if(typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new LengthError('token is empty')

    // if (typeof vehicleId !== 'string') throw new TypeError('vehicleId is not a string')
    // if (!vehicleId) throw new LengthError('vehicleId is empty')

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.onload = function() {
            const { status, responseText: json } = xhr

            if(status >= 500) {
                const { error } = JSON.parse(json)
                
                reject(new Error(error))

                return
            }

            const vehicles = JSON.parse(json)

            resolve(vehicles)
        }

        xhr.open('GET', 'http://localhost/vehicles')
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.send()
    })
}
