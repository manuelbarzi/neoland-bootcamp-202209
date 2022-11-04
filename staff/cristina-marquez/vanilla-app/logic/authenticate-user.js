/**
 * Authenticates a user against DB.
 * 
 * @param {string} email The user email.
 * @param {string} password The user password.
 * 
 * @returns user | Error
 */
function authenticateUser(email, password) {

    console.log('Authenticating...')

    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (user.email === email) {
            if (user.password === password)
                return user
            else
                return new Error('wrong password')
        }
    }

    return new Error('user not registered')
}