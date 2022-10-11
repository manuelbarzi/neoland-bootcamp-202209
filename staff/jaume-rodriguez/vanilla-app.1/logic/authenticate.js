/**
 * Authenticates a user against DB.
 * 
 * @param {string} email 
 * @param {string} password 
 * 
 * @returns  user | Error
 */
function authenticateUser(email, password) {
    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) { 
            if (user.password === password)
                return user
            else
                return new Error('Wrong password')
        }
    }  
    return new Error('User not registered')
}