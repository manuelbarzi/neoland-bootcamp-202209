const { errors: { FormatError } } = require('com')

/* eslint-disable import/no-anonymous-default-export */
export default function (token, appointmentId, callback) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new Error('token is empty')
    if (typeof appointmentId !== 'string') throw new TypeError('appointmentId is not a string')
    if (!appointmentId.length) throw new FormatError('appointmentId is empty')
    if (!callback)
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest

            xhr.onload = function () {
                const { status, responseText: json } = xhr

                if (status >= 500) {
                    const { error } = JSON.parse(json)

                    reject(new Error(error))

                    return
                }

                const appointment = JSON.parse(json)

                resolve(appointment)
            }

            xhr.onerror = () => reject(new Error('connection error'))

            xhr.open('GET', `http://localhost/appointment/${appointmentId}`)
            xhr.setRequestHeader('Authorization', `Bearer ${token}`)
            xhr.send()
        })

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    xhr.onload = function () {
        const { status, responseText: json } = xhr

        if (status >= 500) {
            const { error } = JSON.parse(json)

            callback(new Error(error))

            return
        }

        const appointment = JSON.parse(json)

        callback(null, appointment)
    }

    xhr.onerror = () => callback(new Error('connection error'))

    xhr.open('GET', `http://localhost/appointment/${appointmentId}`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()
}