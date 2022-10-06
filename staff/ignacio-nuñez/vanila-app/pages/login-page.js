var loginDivContenedor = document.createElement('div');
loginDivContenedor.className = 'container reset'


var loginForm = document.createElement('form');
loginForm.className = 'container borde-login';
loginForm.onsubmit = function (event) {
    event.preventDefault()


    var email = loginEmailInput.value;
    var password = loginPasswordInput.value

    if (email && password) {
        var result = authenticateUser(email, password)

        if (result instanceof Error) {
            alert(result.message)

            return
        }
        user = result

        loginForm.reset()

        loginDivContenedor.remove()
        userNameText.innerText =user.name
        homeNav.append(homeLinkHome, menuButton)
        document.body.append(homeContenedor)
    } else{
        alert('put your dates')
    }

}


var loginH2 = document.createElement('h2');
loginH2.innerText = 'Log in'



var loginEmailLabel = document.createElement('label');
loginEmailLabel.innerText = 'E-mail';
loginEmailLabel.htmlFor = 'login-email';
loginEmailLabel.className = 'container__item-left';

var loginPasswordLabel = document.createElement('label');
loginPasswordLabel.innerText = 'Password';
loginPasswordLabel.htmlFor = 'login-password';
loginPasswordLabel.className = 'container__item-left';

var loginEmailInput = document.createElement('input');
loginEmailInput.className = 'input-form'
loginEmailInput.type = 'email';
loginEmailInput.placeholder = 'Input your E-mail';
loginEmailInput.name = 'login-email';
loginEmailInput.id = 'login-email';

var loginPasswordInput = document.createElement('input');
loginPasswordInput.className = 'input-form'
loginPasswordInput.type = 'password';
loginPasswordInput.placeholder = 'Input you password';
loginPasswordInput.name = 'login-password';
loginPasswordInput.id = 'login-password'

var LoginButton = document.createElement('button');
LoginButton.innerText = 'Log in'
LoginButton.className = 'container__item-right'



var hr = document.createElement('hr')

var divRegister = document.createElement('div');
divRegister.className = 'div-register'

var loginParraf = document.createElement('p');
loginParraf.innerText = 'Didnt have an account?';

var loginLinkRegister = document.createElement('a');
loginLinkRegister.href = '';
loginLinkRegister.innerText = 'Register';
loginLinkRegister.className = 'register-text'
loginLinkRegister.onclick = function (event) {
    event.preventDefault()

    loginDivContenedor.remove()
    document.body.append(registerDivContenedor)
}


divRegister.append(loginParraf, loginLinkRegister)
loginForm.append(loginH2, loginEmailLabel, loginEmailInput, loginPasswordLabel, loginPasswordInput, LoginButton, hr, divRegister)
loginDivContenedor.append(loginForm)
