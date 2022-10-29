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
    if (typeof name !== 'string') throw new Error('name is not a string')
    if (name.length < 1) throw new Error('name length is less than 1')
    if (!IS_ALPHABETICAL_REGEX.test(name)) throw new Error('name is not alphabetical')

    if (typeof email !== 'string') throw new Error('email is not a string')
    if (!IS_EMAIL_REGEX.test(email)) throw new Error('email is not valid')

    if (typeof password !== 'string') throw new Error('password is not a string')
    if (password.length < 8) throw new Error('password length is less than 8')
    if (HAS_SPACES_REGEX.test(password)) throw new Error('password has spaces')

    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (user.email === email)
            throw new Error('user already exists')
    }

    const user = {
        name: name,
        email: email,
        password: password
    }

    users.push(user)
}