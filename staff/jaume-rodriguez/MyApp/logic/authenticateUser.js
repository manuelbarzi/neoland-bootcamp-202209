const { readFile } = require('fs')

function authenticateUser(email, password, callback) {
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const onUsersReady = (error, data) => {
        if (error) {
            callback(error)

            return
        }

        // const userFinder = user => user.email === email;
        // const user = users.find(userFinder);
        const users = JSON.parse(data);
        const user = users.find(user => user.email === email)

        if (!user) {
            callback(new Error('user not registered'))

            return
        }

        if (user.password !== password) {
            callback(new Error('wrong password'))

            return
        }
        callback(null, user)
    }

    readFile('./data/users.json', 'utf8', onUsersReady)
}

module.exports = authenticateUser