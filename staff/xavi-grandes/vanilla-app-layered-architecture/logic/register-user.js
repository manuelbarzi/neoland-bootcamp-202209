/**
 * 
 * @param {string} name  - The user name. 
 * @param {string} email - The user email.
 * @param {string} password - The user password.
 * @returns Error | null
 */

function registerUser(name, email, password) {
    for (var i = 0; i < users.length; i++) {  //base de datos users
        var user = users[i]

        if (user.email === email)
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