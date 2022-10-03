var form = document.createElement("form")

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
password.placeholder = "enter your password"

var passwordLabel = document.createElement('label')
passwordLabel.htmlFor = 'password'
passwordLabel.classList = ['label']
passwordLabel.innerText = 'Your password'



var button = document.createElement("button")
button.innerText = "Login"


// button.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (e.altKey) {
//         alert('ALT was pressed')
//     } else {
//         alert('Hello')
//     }
// })



//agregar los elementos al form
form.append(emailLabel, email, passwordLabel, password, button);


// crear un div
var containerFlex = document.createElement("div")

// agregar estilos
containerFlex.classList.add("container-Flex");
form.classList.add("form")
button.classList.add("button")

//agregar formulario al contenedor
containerFlex.append(form)
document.body.append(containerFlex)


var anchor = document.createElement("a")
anchor.href = "register.html"
anchor.innerText = "Register"

// document.body.append(anchor) 
containerFlex.append(anchor)














