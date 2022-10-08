//---------------------REGISTER-----------------------------
//selector var
var formRegister = document.createElement('form')
var mainRegister = document.createElement('main')
var emailInputRegister = document.createElement('input')
var passwordInputRegister = document.createElement('input')
var validatePasswordInputRegister = document.createElement('input')
var buttonA = document.createElement('button')
buttonA.className = "button"
var linkRegister = document.createElement('a')

//atributes
emailInputRegister.type = "email"
emailInputRegister.required = "true"
emailInputRegister.className = "form_email"

passwordInputRegister.type = "password"
passwordInputRegister.required = "true"
passwordInputRegister.className = "form_password"

validatePasswordInputRegister.type = "password"
validatePasswordInputRegister.required = "true"
validatePasswordInputRegister.className = "form_password2"


buttonA.textContent = "SEND"

//insert 
mainRegister.appendChild(formRegister)
formRegister.innerHTML = "<h2>REGISTER</h2>"
formRegister.appendChild(emailInputRegister)
formRegister.appendChild(passwordInputRegister)
formRegister.appendChild(validatePasswordInputRegister)
formRegister.appendChild(buttonA)
formRegister.appendChild(linkRegister)
linkRegister.innerHTML = "LOGIN"
linkRegister.href = "#"

//placeholders
emailInputRegister.placeholder = "Insert Email"
passwordInputRegister.placeholder = "Insert Password"
validatePasswordInputRegister.placeholder = "Repeat your password"

//styles
body.style.height = "100%"
body.style.display = "flex"
body.style.justifyContent = "center"
body.style.alignItems = "center"
body.style.backgroundImage = "url('https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168ea1b6337/razer-wallpapers-page-hero-mobile.jpg')"
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundPosition = "center center"
body.style.backgroundSize = "cover"

formRegister.style.display = "flex"
formRegister.style.alignItems = "center"
formRegister.style.paddingTop = "40px"
formRegister.style.flexDirection = "column"
formRegister.style.height = "20rem"

buttonA.style.margin = "1.5rem"
emailInputRegister.style.margin = "0.3rem"
passwordInputRegister.style.margin = "0.3rem"
validatePasswordInputRegister.style.margin = "0.3rem"

mainRegister.style.border = "6px solid rgba(0,255,0,1)"
mainRegister.style.borderRadius = "5%"
mainRegister.style.backgroundColor = "rgba(17, 132, 0, 1)"
mainRegister.style.height = "20rem"
mainRegister.style.width = "18rem"
mainRegister.style.boxShadow = "0.6rem 0.6rem  62.5rem 1.2rem green"
mainRegister.remove()
//-------------FINISH REGISTER-------------------

//-------------FUNCTIONS-------------------------
//------------------ANCHOR FUNCTION------------------------
//FUNCTION CHANGE LOGIN
linkRegister.onclick = function (event) {
    event.preventDefault()

    log('DEBUG', 'change to register LOGIN page')
    mainRegister.remove()
    document.body.append(mainLogin)
}

//FUNCTION SEND DATA TO DB
formRegister.onsubmit = function (event) {
    debugger
    event.preventDefault()

    var email = emailInputRegister.value
    var password = passwordInputRegister.value
    var password2 = validatePasswordInputRegister.value

    registerUser(email, password, password2)
}