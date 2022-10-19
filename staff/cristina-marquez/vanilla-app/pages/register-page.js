const registerForm = document.createElement('form')
registerForm.className = 'flex flex-col items-center justify-center gap-2 m-2'


const registerName = document.createElement('input')
registerName.type = 'text'
registerName.name = 'name'
registerName.placeholder = 'enter your name'
registerName.pattern = '[A-Za-z]{3,}'
registerName.required = true
registerName.oninvalid = function () {
    alert('(Use minimum 3characters from a-z non-numerical)')
}
registerName.className = 'border rounded-md'

const registerNameLabel = document.createElement('label')
registerNameLabel.htmlFor = 'userName'
registerNameLabel.classList = ['label']
registerNameLabel.innerText = 'Your name'

const registerEmail = document.createElement("input")
registerEmail.type = "email"
registerEmail.name = "email"
registerEmail.placeholder = "enter your email"
registerEmail.className = 'border rounded-md'

const registerEmailLabel = document.createElement('label')
registerEmailLabel.htmlFor = 'email'
registerEmailLabel.classList = ['label']
registerEmailLabel.innerText = 'Your email'


const registerPassword = document.createElement("input")
registerPassword.type = "password"
registerPassword.placeholder = "create a password"
registerPassword.pattern = '[a-z]{3}'
registerPassword.required = true
registerPassword.className = 'border rounded-md'

const registerPasswordLabel = document.createElement('label')
registerPasswordLabel.htmlFor = 'password'
registerPasswordLabel.classList = ['label']
registerPasswordLabel.innerText = 'Your password'

const registerAccountButton = document.createElement("button")
registerAccountButton.innerText = "Create account";
registerAccountButton.className = 'bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-500 hover:to-indigo-300 ... p-2 rounded-lg text-white text-sm'

registerForm.append(registerNameLabel, registerName, registerEmailLabel, registerEmail, registerPasswordLabel, registerPassword, registerAccountButton)


const registerContainerFlex = document.createElement('div')
registerContainerFlex.className = 'bg-white flex flex-col border rounded-lg p-3'

registerContainerFlex.classList.add("container-Flex")
registerForm.classList.add("form")
registerAccountButton.classList.add("button")

registerContainerFlex.append(registerForm)

const registerPage = document.createElement('main')


registerPage.append(registerContainerFlex)


// Add event listeners
registerAccountButton.onclick = function (event) {
    event.preventDefault();

    var inputEmail = registerEmail.value
    var inputPassword = registerPassword.value
    var inputName = registerName.value

    var registerResponse = registerUser(inputName, inputEmail, inputPassword)

    if (registerResponse instanceof Error) {
        log('ERROR', 'User registration failure')
        return
    } else {
        currentUser = registerResponse
        log('INFO', `Registration successful for user ${currentUser.name}`)
    }

    userNameSpan.innerText = currentUser.name

    registerForm.reset()
    registerPage.remove()
    document.body.append(homePage)


}
