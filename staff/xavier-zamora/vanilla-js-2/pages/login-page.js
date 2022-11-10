//---------------LOGIN----------------------

//selector var
var body = document.querySelector('body')
var formLoginRegister = document.querySelector('form')

var formLoginRegister = document.createElement('form')
var loginEmailRegister = document.createElement('input')
loginEmailRegister.placeholder = "insert email"
var loginPasswordRegister = document.createElement('input')
loginPasswordRegister.placeholder = "insert password"
var buttonLoginLogin = document.createElement('button')
buttonLoginLogin.textContent = "SEND"
var mainLogin = document.createElement('main')
var linkMainLogin = document.createElement('a')

//atributes
loginEmailRegister.type = "email"
loginPasswordRegister.type = "password"
loginEmailRegister.required = "true"
loginPasswordRegister.required = "true"
loginEmailRegister.style.margin = "10px"
formLoginRegister.action = "index.html"
formLoginRegister.method = "post"

//insert
//body.appendChild(mainLogin)
mainLogin.appendChild(formLoginRegister)
formLoginRegister.innerHTML = "<h2>LOG IN</h2>"
formLoginRegister.appendChild(loginEmailRegister)
formLoginRegister.appendChild(loginPasswordRegister)
formLoginRegister.appendChild(buttonLoginLogin)
formLoginRegister.appendChild(linkMainLogin)
linkMainLogin.innerHTML = "REGISTER"
linkMainLogin.href = "#"

body.style.display = "flex"
body.style.justifyContent = "center"
body.style.alignItems = "center"
body.style.height = "100%"
body.style.backgroundImage = "url('https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168ea1b6337/razer-wallpapers-page-hero-mobile.jpg')"
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundPosition = "center center"
body.style.backgroundSize = "cover"

mainLogin.style.display = "flex"
mainLogin.style.justifyContent = "center"
mainLogin.style.alignItems = "center"
mainLogin.style.backgroundColor = "rgba(17, 132, 0, 1)"
mainLogin.style.height = "20rem"
mainLogin.style.width = "18rem"
mainLogin.style.boxShadow = "0.6rem 0.6rem  62.5rem 1.2rem green"

buttonLoginLogin.style.margin = "2rem"

formLoginRegister.style.display = "flex"
formLoginRegister.style.flexDirection = "column"
formLoginRegister.style.alignItems = "center"
formLoginRegister.style.margin = "2rem"

mainLogin.style.border = "6px solid rgba(0,255,0,1)"
mainLogin.style.borderRadius = "5%"
//--------------------FINISH LOG IN--------------------------------

//-------------LOG IN ANCHORS------------------
linkMainLogin.onclick = function (event) {
    event.preventDefault()

    log('DEBUG', 'change to REGISTER page')
    mainLogin.remove()
    document.body.append(mainRegister)
}

formLoginRegister.onsubmit = function (event) {
    event.preventDefault()

    log('DEBUG', 'submit login')

    var email = loginEmailRegister.value
    var password = loginPasswordRegister.value

    authenticateUser(email, password)

}
