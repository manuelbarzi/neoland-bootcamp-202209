/**
 * Authenticates a user against DB.
 * 
 * @param {string} email The user email.
 * @param {string} password The user password.
 * 
 * @returns user | Error
 */
 function authenticateUser(email, password) {
    if (typeof email !== 'string') throw new Error(log('ERROR','email is not a string', 'logics/log/authenticate-users.js')), alert('email is not string')
    if (!IS_EMAIL_REGEX.test(email)) throw new Error(log('ERROR','email is not a valid', 'logics/log/authenticate-users.js')), alert('email is not valid')

    if (typeof password !== 'string') throw new Error(log('ERROR','password is not string', 'logics/log/authenticate-users.js')), alert('password is not string')
    if (password.length < 8) throw new Error(log('ERROR','password length is less than 8', 'logics/log/authenticate-users.js')), alert('password length less than 8')
    if (HAS_SPACES_REGEX.test(password)) throw new Error(log('ERROR','password has spaces', 'logics/log/authenticate-users.js')), alert('password have spaces')

    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (user.email === email) {
            if (user.password === password)
                return user
            else
                throw new Error(log('ERROR','wrong password', 'logics/log/authenticate-users.js')), alert('wrong password')
        }
    }

    throw new Error(log('ERROR','user not exist', 'logics/log/authenticate-users.js'))
}