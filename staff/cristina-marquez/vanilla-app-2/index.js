// LOGIN FORM

var users = [
    { name: 'Cristina', email: 'cris@marquez.com', password: '123456' },
    { name: 'Pepe', email: 'pepe@goteras.com', password: '123456' },
]

var loginForm = document.createElement("form")
loginForm.className = 'container'

var loginEmail = document.createElement("input")
loginEmail.type = "email"
loginEmail.name = "email"
loginEmail.placeholder = "enter your email"

var loginEmailLabel = document.createElement('label')
loginEmailLabel.htmlFor = 'email'
loginEmailLabel.classList = ['label']
loginEmailLabel.innerText = 'Your email'


var loginPassword = document.createElement("input")
loginPassword.type = "password"
loginPassword.placeholder = "enter your password"

var loginPasswordLabel = document.createElement('label')
loginPasswordLabel.htmlFor = 'password'
loginPasswordLabel.classList = ['label']
loginPasswordLabel.innerText = 'Your password'



var loginButton = document.createElement("button")
loginButton.innerText = "Login"


// button.addEventListener('click', (event) => {
//     e.preventDefault();
//     if (e.altKey) {
//         alert('ALT was pressed')
//     } else {
//         alert('Hello')
//     }
// })



//agregar los elementos al form

loginForm.append(loginEmailLabel, loginEmail, loginPasswordLabel, loginPassword, loginButton);


// crear un div
var loginContainerFlex = document.createElement("div")

// agregar estilos
loginContainerFlex.classList.add("container-Flex");
loginForm.classList.add("form")
loginButton.classList.add("button")

//agregar formulario al contenedor
loginContainerFlex.append(loginForm)
document.body.append(loginContainerFlex)


var loginRegisterAnchor = document.createElement("a")
loginRegisterAnchor.href = ""
loginRegisterAnchor.innerText = "Register"

// document.body.append(anchor) 
loginContainerFlex.append(loginRegisterAnchor)



// Register form

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


loginRegisterAnchor.onclick = function (event) {
    event.preventDefault()

    log('DEBUG', 'navigate to register')

    loginContainerFlex.remove()
    document.body.append(registerContainerFlex)
}


loginButton.onclick = function (event) {
    event.preventDefault()

    const inputEmail = loginEmail.value
    const inputPassword = loginPassword.value

    // Aux variable so we can toggle it while looping
    let loginSuccessful = false

    users.forEach(user => {
        if (inputEmail === user.email && inputPassword === user.password) {
            log('INFO', `User and password are correct for user ${user.name}`)
            loginSuccessful = true
        }
    })


    // And then we just read the aux variable
    if (loginSuccessful) {
        log('INFO', 'Authentication successful, navigate to google')
    } else {
        log('ERROR', 'Login was not successful')
    }

}
//TODO: check user for login but with for + homepage

registerAccountButton.onclick = (event) => {
    event.preventDefault()

    console.log('Registering...')

    const inputName = registerName.value
    const inputEmail = registerEmail.value
    const inputPassword = registerPassword.value

    const userExists = users.some(user => user.email === inputEmail)

    if (userExists) {
        log('ERROR', `Email ${inputEmail} was already registered`)
        return
    }
    //TODO:user exists with for

    const newUser = {
        name: inputName,
        email: inputEmail,
        password: inputPassword
    }


    users.push(newUser)

    console.log(users)

}

//HOME PAGE

var homepageForm = document.createElement('form')

var homepageHeader = document.createElement('header')
var homepageHeaderLink = document.createElement('a')

//TODO: header image + user name



