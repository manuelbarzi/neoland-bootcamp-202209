var form = document.createElement("form")

var email = document.createElement("input")

var password = document.createElement("input")

var button = document.createElement("button")

//agregar las variables

form.append(email, password, button);
//TODO create labels

email.type = "email"
email.placeholder = "enter your email"

password.type = "password"
password.placeholder = "enter your password"

button.innerText = "Login"

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














