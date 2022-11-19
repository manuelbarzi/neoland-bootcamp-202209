const { readFile, writeFile } = require('fs')

function updateUserEmail(newEmail, userId, callback) {
    if (typeof newEmail !== 'string') throw new TypeError('email is not a string')
    if (!newEmail.length) throw new Error('email is empty')
    if (!userId.length) throw new Error('email is empty')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const updateUserEmail = (error, json) => {
        if (error) {
            callback(error)

            return
        }
        const users = JSON.parse(json)
        const databaseUser = users.find(user => user.id === userId)
        if (databaseUser === undefined) {

            callback(new Error(`userId not found`))
            return
        }

        if (databaseUser.email === newEmail) {
            callback(new Error(`Your new email cannot be the same as your current email`))

            return
        }
        // Valores y referencia / Valor = copia / referencia = puntero
        databaseUser.email = newEmail

        const newJson = JSON.stringify(users, null, 4)

        const userEmailTranscribed = error => {
            if (error) {
                callback(error)

                return
            }
            callback(null)
        }
        writeFile('./data/users.json', newJson, userEmailTranscribed)
    }
    readFile('./data/users.json', 'utf8', updateUserEmail)
}

module.exports = updateUserEmail