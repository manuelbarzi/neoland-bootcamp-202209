var registerForm = document.createElement('form')


var registerName = document.createElement('input')
registerName.type = 'name'
registerName.name = 'name'
registerName.placeholder = 'enter your name'

var registerNameLabel = document.createElement('label')
registerNameLabel.htmlFor = 'userName'
registerNameLabel.classList = ['label']
registerNameLabel.innerText = 'Your name'

var registerEmail = document.createElement("input")
registerEmail.type = "email"
registerEmail.name = "email"
registerEmail.placeholder = "enter your email"

var registerEmailLabel = document.createElement('label')
registerEmailLabel.htmlFor = 'email'
registerEmailLabel.classList = ['label']
registerEmailLabel.innerText = 'Your email'


var registerPassword = document.createElement("input")
registerPassword.type = "password"
registerPassword.placeholder = "create a password"

var registerPasswordLabel = document.createElement('label')
registerPasswordLabel.htmlFor = 'password'
registerPasswordLabel.classList = ['label']
registerPasswordLabel.innerText = 'Your password'

var registerAccountButton = document.createElement("button")
registerAccountButton.innerText = "Create account";

registerForm.append(registerNameLabel, registerName, registerEmailLabel, registerEmail, registerPasswordLabel, registerPassword, registerAccountButton)


var registerContainerFlex = document.createElement('div')

registerContainerFlex.classList.add("container-Flex")
registerForm.classList.add("form")
registerAccountButton.classList.add("button")

registerContainerFlex.append(registerForm)

var registerPage = document.createElement('main')

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

    registerForm.reset()
    registerPage.remove()
    document.body.append(homePage)


}
