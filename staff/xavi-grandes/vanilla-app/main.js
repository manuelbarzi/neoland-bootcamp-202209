// TODO inject log in with js
//TODO inject register with js
//TODO inject home with js

var body = document.querySelector('body')

var divContainer = document.createElement('div')
divContainer.classList.add('container')

var form = document.createElement('form');
form.method = 'post';

var h1 = document.createElement('h1');
h1.innerText = 'LOG IN';

var divInputEmail = document.createElement ('div')
divInputEmail.classList.add('input', 'email')

var labelEmail = document.createElement('label')
labelEmail.htmlFor = 'email'
labelEmail.innerText = 'Email'

var inputEmail = document.createElement('input')
inputEmail.type = 'email'
inputEmail.name = 'email'
inputEmail.id = 'email'
inputEmail.placeholder = 'input your email'

var divInputPasword = document.createElement ('div')
divInputPasword.classList.add('input', 'password')

var labelPassword = document.createElement('label')
labelPassword.htmlFor = 'password'
labelPassword.innerText = 'Password'

var inputPassword = document.createElement('input')
inputPassword.type = 'password'
inputPassword.name = 'password'
inputPassword.id = 'password'
inputPassword.placeholder = 'input your password'

var button = document.createElement('button')
button.classList = 'btn'
button.innerText = 'login' 

var anchor = document.createElement('a')
// anchor.href = 'register.html'

divContainer.append(form)
form.append(h1, divInputEmail, divInputPasword, button, anchor)
divInputEmail.append(labelEmail, inputEmail)
divInputPasword.append(labelPassword, inputPassword)

// console.log(divContainer)
console.log(body)

body.append(divContainer)