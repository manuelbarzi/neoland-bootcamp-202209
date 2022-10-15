/**
 * 
 * @param {*} email user email
 * @param {*} password  user password
 * @returns  user | Error
 */
function authenticateUser(email, password) {

    if (typeof email !== 'string') return new Error('email is not a string')
    if (!IS_EMAIL_REGEX.test(email)) return new Error('email is not valid')

    if (typeof password !== 'string') return new Error('password is not a string')
    if (password.length < 7) return new Error('password length is less than 7')
    if (HAS_SPACES_REGEX.test(password)) return new Error('password has spaces')

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