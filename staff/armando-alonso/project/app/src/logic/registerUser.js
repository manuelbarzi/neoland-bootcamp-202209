function registerUser( name, surname, direction, postal, barrio, email, password, role) {

    return new Promise((resolve, reject) => {
        
        const xhr = new XMLHttpRequest

        xhr.onload = () => {
            const { status, responseText: json } = xhr

            if (status >= 500) {
                const { error } = JSON.parse(json)

                reject(new Error(error))

                return
            }

            const { userId } = JSON.parse(json)

            resolve(null, userId)
        }

        xhr.onerror = () => reject(new Error('connection error'))
        
        xhr.open('POST', 'http://localhost/users')
        xhr.setRequestHeader('Content-Type', 'application/json')

        const payload = { name, surname, direction, postal, barrio, email, password, role }

        const json = JSON.stringify(payload)

        xhr.send(json)
    })
}

export default registerUser