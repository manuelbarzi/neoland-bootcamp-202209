/**
 * authenticates a user against DB
 * 
 * @param {string} email the user email.
 * @param {string} password the user password.
 * 
 *  @returns user | Error
 */
function authenticateUser(email, password) {
    // TODO validate input args 

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            if (user.password === password)
            return user
        else
            return new Error('wrong credentials')
        }
    }

    return new Error('user not registered')
}