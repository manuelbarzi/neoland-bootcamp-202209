/**
 * 
 * @param {*} name The user name
 * @param {*} email The user email
 * @param {*} password The user password
 * @returns  null | error
 */


function registerUser(name, email, password) {
    if (typeof name !== 'string') throw new Error('name is not a string')
    if (!IS_ALPHABETICAL_REGEX.test(name)) throw new Error('name is not alphabetical')

    if (typeof email !== 'string') throw new Error('email is not a string')
    if (!IS_EMAIL_REGEX.test(email)) throw new Error('email is not valid')

    if (typeof password !== 'string') throw new Error('password is not a string')
    if (password.length < 7) throw new Error('password length is less than 7')
    if (HAS_SPACES_REGEX.test(password)) throw new Error('password has spaces')


    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (user.email === email)
            throw new Error('user already exists')
    }

    const user = {
        name,
        email,
        password
    }
    users.push(user)

}
