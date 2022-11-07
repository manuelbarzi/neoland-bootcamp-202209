log('DEBUG', 'mount login')

var form = document.createElement('form');
form.className = 'container'
// form.classList.add('container');

form.onsubmit = function (event) {
    event.preventDefault()

    log('DEBUG', 'submit login')

    var email = inputEmail.value
    var password = inputPassword.value

    var result = authenticateUser(email, password)
    

    if ( result instanceof Error) {
        alert(error.message)

        return
    }

    user = result

    form.reset()

    loginPage.remove()
    homeUserNameText.innerText = result.name
    document.body.append(homePage)

}
var labelEmail = document.createElement('label');
labelEmail.classList.add('container__item--left');
labelEmail.htmlFor = 'email';
labelEmail.innerText = 'E-mail';

var inputEmail = document.createElement('input');
inputEmail.type = 'email';
inputEmail.id = 'email';
inputEmail.placeholder = 'Input your mail';

var labelPassword = document.createElement('label');
labelPassword.htmlFor = 'password';
labelPassword.classList.add('container__item--left');
labelPassword.innerText = 'Password';

var inputPassword = document.createElement('input');
inputPassword.type = 'password';
inputPassword.id = 'pasword';
inputPassword.placeholder = 'Input your password';

var button = document.createElement('button');
button.className = 'container__item--right';
button.innerText = 'Login';

form.append(labelEmail, inputEmail, labelPassword, inputPassword, button);

var registerLink = document.createElement('a')
registerLink.href = ''
registerLink.innerText = 'Register'

registerLink.onclick = function (event) {
    event.preventDefault();

    log('DEBUG', 'navigate to register')

    loginPage.remove()
    document.body.append(registerPage)
}

var loginPage = document.createElement('main')
loginPage.className = 'container'
loginPage.append(form, registerLink)