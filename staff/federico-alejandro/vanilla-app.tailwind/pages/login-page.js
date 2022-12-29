log("DEBOG", "mount login");
//LoginForm = form//
var form = document.createElement("form");
form.className = 'flex flex-col gap-4 w-60 p-7 bg-indigo-600 rounded-lg h-80 shadow-2xl shadow-gray-900'

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
loginMain.className = ''

/*var loginImage = document.getElementById('img')
loginImage.innerHTML = <img src='data/img/vecteezy_3d-online-airline-ticket-buying-confirm-concept-icon-with-3d_10916024_536.png'/>
loginMain.append(loginImage)*/
/*var logoTrello = document.createElement('img')
logoTrello.src = 'https://1000logos.net/wp-content/uploads/2021/05/Trello-logo.png'
logoTrello.className = 'logo-trello'*/



var loginLabelEmail = document.createElement("label");
loginLabelEmail.htmlFor = "email";
loginLabelEmail.className = 'font-bold text-white italic'
loginLabelEmail.innerText = "E-mail";

var loginEmail = document.createElement("input");
loginEmail.type = "email";
loginEmail.name = "email";
loginEmail.id = "email";
loginEmail.placeholder = " input your email";
loginEmail.className = 'border-b border-black w-50 rounded-md'

var loginLabelPassword = document.createElement("label");
loginLabelPassword.htmlFor = "password";
loginLabelPassword.innerText = "Password";
loginLabelPassword.className = 'font-bold text-white italic'

var loginPassword = document.createElement("input")
loginPassword.type = "password"
loginPassword.id = "password"
loginPassword.placeholder = " input you password"
loginPassword.className = 'border-b border-black rounded-md '

var loginButton = document.createElement("button")
loginButton.innerText = "Login";
loginButton.className = ' mx-10 font-bold italic  rounded-full bg-neutral-100 p-2  rounded-x1 hover:animate-spin '

var anchor = document.createElement("a");
anchor.href = ""
anchor.innerText = "Register"
anchor.className = 'animate-bounce underline font-bold text-lg italic'

anchor.onclick = function (event) {
  event.preventDefault();

  log("DEBUG", "navigate to register")

  loginPage.remove();
  document.body.append(registerPage)
}

var loginPage = document.createElement("div")
loginPage.className = 'flex flex-col items-center gap-6 border-5 border-stone-900 h-96 '

var h1 = document.createElement("h1")
h1.innerHTML = "Login"
h1.className = 'text-xl font-extrabold italic'

form.append(
  loginLabelEmail,
  loginEmail,
  loginLabelPassword,
  loginPassword,
  loginButton)

loginPage.append(h1, form, anchor)
//document.body.append(logoTrello)
