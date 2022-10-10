//TODO: render task for user

// login page  
var loginPage = document.createElement('main');


//container flex
var loginContainerFlex = document.createElement("div")
loginPage.append(loginContainerFlex)

loginContainerFlex.classList.add("container-Flex");

//loginform
var loginForm = document.createElement("form")
loginForm.className = 'container'
loginForm.classList.add("form")

var loginEmailLabel = document.createElement('label')
loginEmailLabel.htmlFor = 'email'
loginEmailLabel.classList = ['label']
loginEmailLabel.innerText = 'Your email'


var loginEmail = document.createElement("input")
loginEmail.type = "email"
loginEmail.name = "email"
loginEmail.placeholder = "enter your email"

var loginPasswordLabel = document.createElement('label')
loginPasswordLabel.htmlFor = 'password'
loginPasswordLabel.classList = ['label']
loginPasswordLabel.innerText = 'Your password'

var loginPassword = document.createElement("input")
loginPassword.type = "password"
loginPassword.placeholder = "enter your password"


var loginButton = document.createElement("button")
loginButton.classList.add("button")
loginButton.innerText = "Login"

loginForm.append(loginEmailLabel, loginEmail, loginPasswordLabel, loginPassword, loginButton);

loginContainerFlex.append(loginForm)


// Link to register form
var loginRegisterAnchor = document.createElement("a")
loginRegisterAnchor.href = ""
loginRegisterAnchor.innerText = "Register"

loginContainerFlex.append(loginRegisterAnchor)


// Add event listeners
loginForm.onsubmit = function (event) {
    event.preventDefault();

    var inputEmail = loginEmail.value
    var inputPassword = loginPassword.value

    var authResponse = authenticateUser(inputEmail, inputPassword)

    if (authResponse instanceof Error) {
        log('ERROR', 'User authentication failure')

        loginPassword.value = ''
        return
    } else {
        currentUser = authResponse
        log('INFO', `Authentication successful for user ${currentUser.name}`)
    }

    loginForm.reset()
    loginPage.remove()
    renderTasks()

    userNameSpan.innerText = currentUser.name
    document.body.append(homePage)
}

loginRegisterAnchor.onclick = function (event) {
    event.preventDefault()

    log('DEBUG', 'navigate to register')

    loginPage.remove()
    document.body.append(registerPage)
}

