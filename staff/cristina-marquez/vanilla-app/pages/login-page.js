// login page  
const loginPage = document.createElement('main');
loginPage.className = `h-full w-full flex flex-col items-center justify-center bg-${cssPrimaryColor}`


//container flex
const loginContainerFlex = document.createElement("div")
loginPage.append(loginContainerFlex)

loginContainerFlex.classList.add("container-Flex");
loginContainerFlex.className = 'bg-white flex flex-col border rounded-lg p-3'

//loginform
const loginForm = document.createElement("form")
loginForm.className = 'flex flex-col items-center justify-center gap-2 m-2'
loginForm.classList.add("form")

const loginEmailLabel = document.createElement('label')
loginEmailLabel.htmlFor = 'email'
loginEmailLabel.classList = ['label']
loginEmailLabel.innerText = 'Your email'



const loginEmail = document.createElement("input")
loginEmail.type = "email"
loginEmail.name = "email"
loginEmail.placeholder = "enter your email"
loginEmail.className = 'border rounded-md'

const loginPasswordLabel = document.createElement('label')
loginPasswordLabel.htmlFor = 'password'
loginPasswordLabel.classList = ['label']
loginPasswordLabel.innerText = 'Your password'

const loginPassword = document.createElement("input")
loginPassword.type = "password"
loginPassword.placeholder = "enter your password"
loginPassword.className = 'border rounded-md'


const loginButton = document.createElement("button")
loginButton.classList.add("button")
loginButton.innerText = "Login"
loginButton.className = `bg-pink-500 hover:bg-pink-600 text-${cssPrimaryColorText} p-2 rounded-lg text-sm`

loginForm.append(loginEmailLabel, loginEmail, loginPasswordLabel, loginPassword, loginButton);

loginContainerFlex.append(loginForm)


// Link to register form
const loginRegisterAnchor = document.createElement("a")
loginRegisterAnchor.href = ""
loginRegisterAnchor.innerText = "Register"


loginContainerFlex.append(loginRegisterAnchor)


// Add event listeners
loginForm.onsubmit = function (event) {
    event.preventDefault();

    const inputEmail = loginEmail.value
    const inputPassword = loginPassword.value

    const authResponse = authenticateUser(inputEmail, inputPassword)

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

    clearTasksCards()
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

