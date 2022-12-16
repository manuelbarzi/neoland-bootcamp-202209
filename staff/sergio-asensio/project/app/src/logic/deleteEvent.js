/**
 * Delete a post against API
 * 
 * @param {string} token The user token
 * @param {string} eventId The event eventId
 */
function deleteEvent(token, eventId) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new Error('token is empty')
    if (typeof eventId !== 'string') throw new TypeError('eventId is not a string')
    if (!eventId.length) throw new Error('eventId is empty')

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.onload = () => {
            const { status } = xhr

            if (status >= 500) {
                const { error } = JSON.parse(json)

                reject(new Error(error))

                return
            }

            resolve()
        }

        xhr.onerror = () => reject(new Error('connection error'))

        xhr.open('DELETE', `http://localhost/eventos/${eventId}`)
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.setRequestHeader('Content-Type', 'application/json')

        const payload = { eventId: eventId }
        const json = JSON.stringify(payload)

        xhr.send()
    })
    
}

export default deleteEvent