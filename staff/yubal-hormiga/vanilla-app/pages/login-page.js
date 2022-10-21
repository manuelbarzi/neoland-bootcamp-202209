log('DEBUG', 'mount login')

var loginForm = document.createElement('form')
loginForm.className = 'p-5'

loginForm.onsubmit = function (event) {
    event.preventDefault()

    log('DEBUG', 'submit login')

    var email = loginEmailInput.value
    var password = loginPasswordInput.value

    var result = authenticateUser(email, password)

    if (result instanceof Error) {
        alert(result.message)

        return
    }

    user = result

    loginForm.reset()

    loginPage.remove()
    
    headerUserNameText.innerText = user.name

    clearTasksCards()

    renderTasksCards()

    document.body.append(homePage)
}

var loginEmailLabel = document.createElement('label')
loginEmailLabel.htmlFor = 'login-email'
loginEmailLabel.className = 'mr-2 mr-2 font-bold text-cyan-900 '
loginEmailLabel.innerText = 'E-mail'

var loginEmailInput = document.createElement('input')
loginEmailInput.type = 'email'
loginEmailInput.id = 'login-email'
loginEmailInput.className = 'border-green-500 mr-2  focus:outline-0'
loginEmailInput.placeholder = 'Input your e-mail'

var loginPasswordLabel = document.createElement('label')
loginPasswordLabel.htmlFor = 'login-password'
loginPasswordLabel.className = 'mr-2 font-bold text-cyan-700'
loginPasswordLabel.innerText = 'Password'

var loginPasswordInput = document.createElement('input')
loginPasswordInput.type = 'password'
loginPasswordInput.id = 'login-password'
loginPasswordInput.className='focus:outline-0'
loginPasswordInput.placeholder = 'Input your password'

var loginSubmitButton = document.createElement('button')
loginSubmitButton.className = ' bg-cyan-400 hover:bg-cyan-00 py-1 px-4 font-bold text-gray-100	rounded-md ml-3	hover:bg-blue-600' 
loginSubmitButton.innerText = 'Login'

loginForm.append(loginEmailLabel, loginEmailInput, loginPasswordLabel, loginPasswordInput, loginSubmitButton)

var loginRegisterLink = document.createElement('a')
loginRegisterLink.href = "	"
loginRegisterLink.innerText = 'Register'
loginRegisterLink.className = 'text-rose-900 font-bold underline	bg-color-red block items-center mt-6 text-center'

loginRegisterLink.onclick = function (event) {
    event.preventDefault()

    log('DEBUG', 'navigate to register')

    loginPage.remove()
    document.body.append(registerPage)
}

var loginPage = document.createElement('main')
loginPage.className = 'h-screen flex flex-col justify-center items-center '
loginPage.append(loginForm, loginRegisterLink)