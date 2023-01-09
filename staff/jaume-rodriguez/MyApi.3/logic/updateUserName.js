const { readFile, writeFile } = require('fs')

function updateUserName(newName, userId, callback) {
    if (typeof newName !== 'string') throw new TypeError('name is not a string')
    if (!newName.length) throw new Error('name is empty')
    if (!userId.length) throw new Error('name is empty')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const updateUserName = (error, json) => {
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

        if (databaseUser.name === newName) {
            callback(new Error(`Your new name cannot be the same as your current name`))

            return
        }
        // Valores y referencia / Valor = copia / referencia = puntero
        databaseUser.name = newName

        const newJson = JSON.stringify(users, null, 4)

        const userNameTranscribed = error => {
            if (error) {
                callback(error)

                return
            }
            callback(null)
        }
        writeFile('./data/users.json', newJson, userNameTranscribed)
    }
    readFile('./data/users.json', 'utf8', updateUserName)
}

module.exports = updateUserName