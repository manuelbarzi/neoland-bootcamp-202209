/**
 * 
 * @param {*} email user email
 * @param {*} password  user password
 * @returns  user | Error
 */
function authenticateUser(email, password) {

    for (i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            if (user.password === password)
                return user
            else
                return new Error('wrong password')
        }
    }
    return new Error('user not registered')
}