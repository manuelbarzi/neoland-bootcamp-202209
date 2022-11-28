const { readFile, writeFile } = require('fs')

function updateUserPassword(newPassword, userId, callback) {
    if (!newPassword.length) throw new Error('password is empty')
    if (!userId.length) throw new Error('password is empty')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const updateUserPassword = (error, json) => {
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

        if (databaseUser.password === newPassword) {
            callback(new Error(`Your new password cannot be the same as your current password`))

            return
        }
        // Valores y referencia / Valor = copia / referencia = puntero
        databaseUser.password = newPassword

        const newJson = JSON.stringify(users, null, 4)

        const userPasswordTranscribed = error => {
            if (error) {
                callback(error)

                return
            }
            callback(null)
        }
        writeFile('./data/users.json', newJson, userPasswordTranscribed)
    }
    readFile('./data/users.json', 'utf8', updateUserPassword)
}

module.exports = updateUserPassword