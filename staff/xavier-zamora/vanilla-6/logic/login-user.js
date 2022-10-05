/**
 * LOGIN user in Home
 * 
 * @param {string} email The user name.
 * @param {string} password The user email.
 * 
 * @returns null | Error
 */
//----------------SUBMIT FUNCTIONS------------------
function authenticateUser(email, password) {
    i = users.length
    var match = false
    while (i > 0) {
        i--
        var container = users[i]
        if (container.email === email && container.password === password) {
            debugger
            match = true;
            userName.innerHTML = loginEmailRegister.value //userNameValue is in login pages/login-page.js line 3 
            break
        }
    }
    if (match === true) {
        formLoginRegister.reset()
        log('DEBUG', 'change page to home.html')
        body.append(mainHome)
        mainLogin.remove()
    } else {
        alert("wrong password or email")
        log('ERROR', 'wrong credentials')
        formLoginRegister.reset()
    }

}