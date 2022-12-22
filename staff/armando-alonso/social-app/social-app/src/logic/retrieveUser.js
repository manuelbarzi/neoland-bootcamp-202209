export default function(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')

    new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest

        xhr.onload = function () {
            const { status, responseText: json } = xhr

            if (status >= 500) {
                const { error } = JSON.parse(json)

                reject(new Error(error))

                return
            }

            const user = JSON.parse(json)

            resolve(user)
        }

        xhr.onerror = () => reject(new Error('connection error'))

        xhr.open('GET', 'http://localhost/users')
        xhr.setRequestHeader('Authorization', `Bearer ${userId}`)
        xhr.send()
        })
    
}