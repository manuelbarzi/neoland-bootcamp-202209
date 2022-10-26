/**
 * Authenticates a user against DB.
 * 
 * @param {string} email 
 * @param {string} password 
 * 
 * @returns  user | Error
 */
function authenticateUser(email, password) {
    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (user.email === email) {
            if (user.password === password)
                return user
            else
                throw new Error('Wrong password')
        }
    }
    throw new Error('User not registered')
}