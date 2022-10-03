var form = document.createElement('form')

var userName = document.createElement('input')
userName.type = 'name'
userName.name = 'name'
userName.placeholder = 'enter your name'

var userNameLabel = document.createElement('label')
userNameLabel.htmlFor = 'userName'
userNameLabel.classList = ['label']
userNameLabel.innerText = 'Your name'

var email = document.createElement("input")
email.type = "email"
email.name = "email"
email.placeholder = "enter your email"

var emailLabel = document.createElement('label')
emailLabel.htmlFor = 'email'
emailLabel.classList = ['label']
emailLabel.innerText = 'Your email'


var password = document.createElement("input")
password.type = "password"
password.placeholder = "create a password"

var passwordLabel = document.createElement('label')
passwordLabel.htmlFor = 'password'
passwordLabel.classList = ['label']
passwordLabel.innerText = 'Your password'

var button = document.createElement("button")
button.innerText = "Create account";

form.append(userNameLabel, userName, emailLabel, email, passwordLabel, password, button)

var containerFlex = document.createElement('div')

containerFlex.classList.add("container-Flex")
form.classList.add("form")
button.classList.add("button")

containerFlex.append(form)
document.body.append(containerFlex)
