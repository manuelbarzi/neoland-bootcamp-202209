/**
 * Registers a user in DB
 * 
 * @param {string} email The user email.
 * @param {string} password The user password.
 * @param {string} password2 The user validatePassword.
 * 
 * @returns null | Error
 */
//---------------SUBMIT FUNCTION------------------------
//FUNCTOIN FOR REGISTER USER
function registerUser(email, password, password2) {
    debugger
    if (!IS_EMAIL_REGEX.test(email)) {
        alert('email is not valid')
        formRegister.reset()
        return new Error('email is not valid')
    }
    if (typeof password !== 'string') {
        alert('password is not string')
        formRegister.reset()
        return new Error('password is not string')
    }
    if (password.length < 8) {
        alert('Password need 8 characters')
        formRegister.reset()
        return new Error('Password need 8 characters')
    }
    if (!HAS_NUMBER_REGEX.test(password)) {
        alert('The password need almost 1 number')
        formRegister.reset()
        return new Error('The password need almost 1 number')
    }
    if (password != password2) {
        alert('password and validate password not match')
        formRegister.reset()
        return new Error('password and validate password not match')
    }

    let user = {
        email: emailInputRegister.value,
        password: passwordInputRegister.value,
        password2: validatePasswordInputRegister.value,
    }

    for (var i = 0; i < users.length; i++) {
        var userC = users[i].email
        if (userC === email) {
            formRegister.reset()
            alert("email already exist")
            log('ERROR', 'email already exist')

            return
        }
    }
    users.push(user)
    console.log(users)
    log('DEBUG', 'user register')
    linkRegister.click()
    formRegister.reset()

    return null
}



