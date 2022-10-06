/**
 * Registers a user in DB
 * 
 * @param {string} email The user name.
 * @param {string} password The user password.
 * @param {string} password2 The user validatePassword.
 * 
 * @returns null | Error
 */
//---------------SUBMIT FUNCTION------------------------
function registerUser(email, password, password2) {
    debugger
    var email = emailInputRegister.value
    var validateNumber = /[0-9]/.test(password)
    for (var i = 0; i < users.length; i++) {
        var userC = users[i].email
        if (userC === email) {
            formRegister.reset()
            alert("email already exist")
            log('ERROR', 'email already exist')

            return
        }
    }
    let user = {
        email: emailInputRegister.value,
        password: passwordInputRegister.value,
        password2: validatePasswordInputRegister.value,
    }
    if (password != password2) {
        wrongPassword()
    }
    else if (user.email.length <= 8 || user.password.length <= 8) {
        wrongLenght()
    }
    else if (validateNumber === false) {
        passwordNotNumber()
    }
    else {
        users.push(user)
        pushUsers()
    }
}
function wrongPassword() {
    log('ERROR', 'password not macht')
    formRegister.reset()
    alert('Error: Password not match')
}
function passwordNotNumber() {
    log('ERROR', 'password need almost 1 number')
    formRegister.reset()
    alert('Error: password need almost 1 number')
}
function wrongLenght() {
    log('ERROR', 'email and password need more than 8 characters')
    formRegister.reset()
    alert('Error: email and password need more than 8 characters')
}

function pushUsers() {
    console.log(users)
    log('DEBUG', 'user register')
    linkRegister.click()
    formRegister.reset()
}


