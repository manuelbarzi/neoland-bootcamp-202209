log("DEBOG", "mount login");
//LoginForm = form//
var form = document.createElement("form");
form.className = "container";

form.onsubmit = function (event) {
  event.preventDefault()

  log("DEBUG", "submit login")

  var email = loginEmail.value
  var password = loginPassword.value

  
  try {
    user = authenticateUser(email, password)


    form.reset();

    loginPage.remove();

    userName.innerText = user.name

    clearTasksCards()
    renderTasksCards()

    document.body.append(homePage)
  } catch (error) {

    alert(error.message)

    loginPassword.value = ''
  }
  //user = result
}

var loginMain = document.createElement('main')
loginMain.className = 'container'

/*var loginImage = document.getElementById('img')
loginImage.innerHTML = <img src='data/img/vecteezy_3d-online-airline-ticket-buying-confirm-concept-icon-with-3d_10916024_536.png'/>
loginMain.append(loginImage)*/
/*var logoTrello = document.createElement('img')
logoTrello.src = 'https://1000logos.net/wp-content/uploads/2021/05/Trello-logo.png'
logoTrello.className = 'logo-trello'*/



var loginLabelEmail = document.createElement("label");
loginLabelEmail.htmlFor = "email";
loginLabelEmail.className = "container__item--left";
loginLabelEmail.innerText = "E-mail";

var loginEmail = document.createElement("input");
loginEmail.type = "email";
loginEmail.name = "email";
loginEmail.id = "email";
loginEmail.placeholder = "input your email";

var loginLabelPassword = document.createElement("label");
loginLabelPassword.htmlFor = "password";
loginLabelPassword.innerText = "Password";
loginLabelPassword.className = "container__item--left";

var loginPassword = document.createElement("input")
loginPassword.type = "password"
loginPassword.id = "password"
loginPassword.placeholder = "input you password"

var loginButton = document.createElement("button")
loginButton.innerText = "Login";
loginButton.className = 'login--button'

var anchor = document.createElement("a");
anchor.href = ""
anchor.innerText = "Register"
anchor.className = "register--login"

anchor.onclick = function (event) {
  event.preventDefault();

  log("DEBUG", "navigate to register")

  loginPage.remove();
  document.body.append(registerPage)
}

var loginPage = document.createElement("div")
loginPage.className = "container container--login"

var h1 = document.createElement("h1")
h1.innerHTML = "Login"

form.append(
  loginLabelEmail,
  loginEmail,
  loginLabelPassword,
  loginPassword,
  loginButton)

loginPage.append(h1, form, anchor)
//document.body.append(logoTrello)
