log("DEBOG", "mount login");
//LoginForm = form//
const form = document.createElement("form");
form.className = "container";

form.onsubmit = function (event) {
  event.preventDefault()

  log("DEBUG", "submit login")

  const email = loginEmail.value
  const password = loginPassword.value

  
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

const loginMain = document.createElement('main')
loginMain.className = 'container'

/*const loginImage = document.getElementById('img')
loginImage.innerHTML = <img src='data/img/vecteezy_3d-online-airline-ticket-buying-confirm-concept-icon-with-3d_10916024_536.png'/>
loginMain.append(loginImage)*/
/*const logoTrello = document.createElement('img')
logoTrello.src = 'https://1000logos.net/wp-content/uploads/2021/05/Trello-logo.png'
logoTrello.className = 'logo-trello'*/



const loginLabelEmail = document.createElement("label");
loginLabelEmail.htmlFor = "email";
loginLabelEmail.className = "container__item--left";
loginLabelEmail.innerText = "E-mail";

const loginEmail = document.createElement("input");
loginEmail.type = "email";
loginEmail.name = "email";
loginEmail.id = "email";
loginEmail.placeholder = "input your email";

const loginLabelPassword = document.createElement("label");
loginLabelPassword.htmlFor = "password";
loginLabelPassword.innerText = "Password";
loginLabelPassword.className = "container__item--left";

const loginPassword = document.createElement("input")
loginPassword.type = "password"
loginPassword.id = "password"
loginPassword.placeholder = "input you password"

const loginButton = document.createElement("button")
loginButton.innerText = "Login";
loginButton.className = 'login--button'

const anchor = document.createElement("a");
anchor.href = ""
anchor.innerText = "Register"
anchor.className = "register--login"

anchor.onclick = function (event) {
  event.preventDefault();

  log("DEBUG", "navigate to register")

  loginPage.remove();
  document.body.append(registerPage)
}

const loginPage = document.createElement("div")
loginPage.className = "container container--login"

const h1 = document.createElement("h1")
h1.innerHTML = "Login"

form.append(
  loginLabelEmail,
  loginEmail,
  loginLabelPassword,
  loginPassword,
  loginButton)

loginPage.append(h1, form, anchor)
//document.body.append(logoTrello)
