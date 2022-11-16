/**
 * @param {string} email 
 * @param {string} password 
 * 
 * @returns 
 */
function authenticateUser(email, password) {
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (!IS_EMAIL_REGEX.test(email)) throw new Error('email not valid')

    if (typeof password !== 'string') throw new Error('password is not a string')
    // if (password.length < 8) throw new Error('password length is less than 8 characters')
    if (HAS_SPACES_REGEX.test(password)) throw new Error('password has spaces')


    //TODO: send user and password to backend and check if user credentials are correct


    // for (let i = 0; i < users.length; i++) {
    //     const user = users[i]

    //     if (user.email === email) {
    //         if (user.password === password)
    //             return user
    //         else
    //             throw new Error('Wrong password')
    //     }
    // }




    throw new Error('User is not registered')
}