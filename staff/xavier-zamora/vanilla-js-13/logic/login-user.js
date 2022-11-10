/**
 * LOGIN user in Home
 * 
 * @param {string} email The user name.
 * @param {string} password The user email.
 * 
 * @returns null | Error
 */
//----------------SUBMIT FUNCTIONS------------------
//FUNCTION FOR MATCH USERS ON LOGIN
var boolLog = true

function authenticateUser(email, password) {

    if (!IS_EMAIL_REGEX.test(email)) {
        alert('email is not valid')
        return new Error('email is not valid')
    }
    if (typeof password !== 'string') {
        alert('password is not string')
        return new Error('password is not string')
    }
    if (password.length < 8) {
        alert('Password need 8 characters')
        return new Error('Password need 8 characters')
    }
    if (!HAS_NUMBER_REGEX.test(password)) {
        alert('The password need almost 1 number')
        return new Error('The password need almost 1 number')
    }
 
    var match = false
    //MATCH IF CREDENTIALS ARE CORRECT
    for (var i = users.length; i > 0; i--) {
        var container = users[i - 1] 
        if (container.email === email && container.password === password) {
            match = true;
            userName.innerHTML = loginEmailRegister.value //userNameValue is in pages/nav.js line 3 
            userNameLogin = loginEmailRegister.value
            break
        }
    }
    if (match === true) {
        formLoginRegister.reset()
        log('DEBUG', 'change page to home.html')
        mainLogin.remove()
        taskPanel.remove()
        body.append(taskPanel)

        //add bool for unable the showItems() function
        if (boolLog === true) {
            boolLog = false
            showItems()
        }

        //THIS ENABLE DE MENU
        nav.append(imgNavHeaderSpan)
        imgNavHeaderSpan.className = "material-symbols-outlined"
        imgNavHeaderSpan.innerHTML = "menu"
        imgNavHeaderSpan.height = "30"
        imgNavHeaderSpan.width = "30"
        imgNavHeaderSpan.style.marginRight = "1rem"

    } else {
        alert("wrong password or email")
        log('ERROR', 'wrong credentials')
        loginPasswordRegister.value = ""
    }
}