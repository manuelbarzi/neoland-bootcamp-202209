import { errors } from 'com'

const { FormatError, NotFoundError, UnexpectedError, AuthError, LengthError} = errors

export default function (token) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new LengthError('token is empty')

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.onload = function () {
            const { status, responseText: json } = xhr

            if (status >= 500) {
                const { error } = JSON.parse(json)

                reject(new Error(error))

                return
            }

            const events = JSON.parse(json)

            if(!events.some(event => event.month === 'january')){
                const month = { month: 'january', monthNumber: 0}
                events.splice(month.monthNumber, 0, month)
            }

            if(!events.some(event => event.month === 'february')){
                const month = { month: 'february', monthNumber: 1}
                events.splice(month.monthNumber, 0, month)
            }

            if(!events.some(event => event.month === 'march')){
                const month = { month: 'march', monthNumber: 2}
                events.splice(month.monthNumber, 0, month)
            }
            if(!events.some(event => event.month === 'april')){
                const month = { month: 'april', monthNumber: 3}
                events.splice(month.monthNumber, 0, month)
            }
            if(!events.some(event => event.month === 'may')){
                const month = { month: 'may', monthNumber: 4}
                events.splice(month.monthNumber, 0, month)
            }
            if(!events.some(event => event.month === 'june')){
                const month = { month: 'june', monthNumber: 5}
                events.splice(month.monthNumber, 0, month)
            }
            if(!events.some(event => event.month === 'july')){
                const month = { month: 'july', monthNumber: 6}
                events.splice(month.monthNumber, 0, month)
            }
            if(!events.some(event => event.month === 'august')){
                const month = { month: 'august', monthNumber: 7}
                events.splice(month.monthNumber, 0, month)
            }
            if(!events.some(event => event.month === 'september')){
                const month = { month: 'september', monthNumber: 8}
                events.splice(month.monthNumber, 0, month)
            }
            if(!events.some(event => event.month === 'october')){
                const month = { month: 'october', monthNumber: 9}
                events.splice(month.monthNumber, 0, month)
            }
            if(!events.some(event => event.month === 'november')){
                const month = { month: 'november', monthNumber: 10}
                events.splice(month.monthNumber, 0, month)
            }
            if(!events.some(event => event.month === 'december')){
                const month = { month: 'december', monthNumber: 11}
                events.splice(month.monthNumber, 0, month)
            }
            


            resolve(events)
        }

        xhr.onerror = () => reject(new Error('connection error'))

        xhr.open('GET', 'http://localhost/eventos')
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.send()
    })

}