/**
 * Create list box on the home
 * @param {string} token 
 * @param {string} title 
 */

 export default function (token, title) {
    if(typeof token !== 'string') throw new TypeError('Token is not a string')
    if(!token.length) throw new Error('token is empty')

    if(typeof title !== 'string') throw new TypeError ('title is not a string')
    if(!title.length) throw new Error ('title is empty')

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.onload = () => {
            const {status, responseText: json} = xhr

            if(status >= 500) {
                const {error} = JSON.parse(json)

                reject(new Error(error))

                return
            }

            resolve()
        }

        xhr.onerror = () => reject(new Error ('connection error'))

        xhr.open ('POST', `http://localhost/lists`)
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)

        const payload = { title }
        const json = JSON.stringify(payload)

        xhr.send(json)
    })
}