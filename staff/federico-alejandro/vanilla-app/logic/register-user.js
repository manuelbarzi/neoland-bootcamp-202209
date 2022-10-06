/**
 * Registers a user in DB
 * 
 * @param {string} name the user name.
 * @param {string} email the user email.
 * @param {string} password the user password.
 * 
 * @returns null | Error
 */

function registerUser(name, email, password) {
    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if(user.email === email)
          return new Error('user already exists')
    }

    var user = {
        name: name,
        email: email,
        password: password
    }

    users.push(user)

    return null
}
