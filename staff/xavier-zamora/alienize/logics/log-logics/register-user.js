/**
 * Registers a user in DB
 * 
 * @param {string} name The user name.
 * @param {string} email The user email.
 * @param {string} password The user password.
 * 
 * @returns null | Error
 */
 function registerUser(name, email, password) {
    if (typeof name !== 'string') throw new Error(log('ERROR','name is not a string', 'logics/log/register-user.js'))
    if (name.length < 3) throw new Error(log('ERROR','name length is less than 3', 'logics/log/authenticate-user.js')), alert('name length is less than 3 characters')
    if (!IS_ALPHABETICAL_REGEX.test(name)) throw new Error(log('ERROR','name is not alphabetical', 'logics/log/authenticate-users.js'))

    if (typeof email !== 'string') throw new Error(log('ERROR','email is not a string', 'logics/log/authenticate-users.js'))
    if (!IS_EMAIL_REGEX.test(email)) throw new Error(log('ERROR','email is not valid', 'logics/log/authenticate-users.js'))

    if (typeof password !== 'string') throw new Error(log('ERROR','password is not string', 'logics/log/authenticate-users.js'))
    if (password.length < 8) throw new Error(log('ERROR','password length is less than 8', 'logics/log/authenticate-users.js'))
    if (HAS_SPACES_REGEX.test(password)) throw new Error(log('ERROR','password has spaces', 'logics/log/authenticate-users.js'))
    if (!HAS_NUMBER_REGEX) throw new Error(log('ERROR', 'password not have numbers', 'logics/log/authenticate-users.js'))

    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (user.email === email)
            throw new Error(log('ERROR','user already exists', 'logics/log/authenticate-users.js'))
    }

    const user = {
        name: name,
        email: email,
        password: password
    }

    users.push(user)
}