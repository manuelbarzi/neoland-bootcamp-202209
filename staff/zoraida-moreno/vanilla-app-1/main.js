var head = document.querySelector('head')

var link = document.createElement('link')
link.href='style.css';
link.rel='stylesheet';
link.type='text/css';

head.append(link);

var header = document.createElement()
header.classList.add('header')

var body = document.querySelector('body');
body.classList.add('container');

var form = document.createElement('form');
form.classList.add('container');

body.append(form);

var h1 = document.createElement('h1')
h1.innerText= 'Login';

var labelEmail = document.createElement('label');
labelEmail.classList.add('container__item--left');
labelEmail.htmlFor = 'email';
labelEmail.innerText = 'E-mail';

var inputEmail = document.createElement('input');
inputEmail.type = 'email';
inputEmail.name = 'email';
inputEmail.id = 'email';
inputEmail.placeholder = 'Input your mail';

var labelPassword = document.createElement('label');
labelPassword.type = 'password';
labelPassword.classList.add('container__item--left');
labelPassword.name = 'password';
labelPassword.id = 'password';
labelPassword.innerText = 'Password';
labelPassword.placeholder = 'Input your password';

var inputPassword = document.createElement('input');
inputPassword.type = 'password';
inputPassword.name = 'password';
inputPassword.id = 'pasword';
inputPassword.placeholder = 'Input your password';


var button = document.createElement('button')
button.classList.add('button')
button.innerText = 'Login'

form.append(h1, labelEmail, inputEmail, labelPassword, inputPassword, button);


