/**
 * Registers a user in DB
 * 
 * @param {string} name the user name.
 * @param {string} email the user email.
 * @param {string} password the user password.
 * @param {number} phone the user phone number.
 * 
 * @returns null | Error
 */

function registerUser(name, email, password, phone) {
    if (typeof name !== 'string') return new Error ('name is not a string')
    if (name.length < 2) return new Error('name length is less than 2')
    if (!IS_ALPHABETICAL_REGEX.test(name)) return new Error ('name is not alphabetical')
    
    if (typeof email !== 'string') return new Error ('email is not a string')
    if (!IS_EMAIL_REGEX.test(email)) return new Error ('email is not valid')

    if (typeof password !== 'string') return new Error ('password is not a string')
    if (password.length < 8) return new Error ('password length is less than 8')
    if (HAS_SPACES_REGEX.test(password)) return new Error ('password has spaces')
// condiciones phone no funciona//
    if (typeof phone !== 'number') return new Error ('phone must be a number')
    if (phone.length < 12) return new Error('phone number length is less than 12')
    if (!IS_NUMERICAL_PHONE_REGEX.test(phone)) return new Error ('phone must be a numerical')


    
    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if(user.email === email)
          return new Error('user already exists')
    }

    var user = {
        name: name,
        email: email,
        password: password,
        phone: phone,
    }

    users.push(user)

    return null
}
