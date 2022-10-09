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
    i = users.length
    var match = false
    while (i > 0) {
        i--
        var container = users[i]
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
        //add bool to change this
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