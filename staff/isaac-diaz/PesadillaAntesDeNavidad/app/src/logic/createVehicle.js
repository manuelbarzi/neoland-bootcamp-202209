import { json } from 'react-router-dom'
import { errors } from 'com'
const { LengthError } = errors



export default function createVehicle(userId, vehicleId) {
    if(typeof userId !== 'string') throw new TypeError('userId is not a string')
    if(!userId.length) throw new LengthError('userId is empty')

    if(typeof vehicleId !== 'string') throw new TypeError('vehicleId is not string')
    if(!vehicleId.length) throw new LengthError('vehicleId is empty')

    return new Promise((resolve, reject) => {
        const xhr = XMLHttpRequest()

        xhr.onload = () => {
            const { status, responseText: json} = xhr

            if(status === 201) 
                resolve()
            else(status === 500)
                    reject()
        }

        xhr.onerror = () => reject(new Error('connection error'))

        xhr.open('POST', 'http://localhost/vehicle')
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.setRequestHeader('Content-Type', 'application/json')
       
        const payload = { brand, model, type, lisence }

        const json = JSON.stringify(payload)

        xhr.send(json)

    }) 
}