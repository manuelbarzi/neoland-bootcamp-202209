var form = document.createElement('form');
var email = document.createElement('input');
var password= document.createElement('input');
var button= document.createElement('button');
var emailLabel= document.createElement('label');
var passwordLabel= document.createElement('label');
var style = document.createElement('link');
var parrafAccount = document.createElement('p');
var linkRegister= document.createElement('a');
var linkHome= document.createElement('a');
var divContenedor= document.createElement('div');

style.rel='stylesheet';
style.href='style.css';
document.head.append(style);

divContenedor.className='container reset'

form.className='container borde-login';

emailLabel.innerText= 'E-mail';
emailLabel.htmlFor='email';
emailLabel.className='container__item-left';

passwordLabel.innerText= 'Password';
passwordLabel.htmlFor='password';
passwordLabel.className='container__item-left';

email.className='input-form'
email.type='email';
email.placeholder='Input your E-mail';
email.name= 'email';
email.id= 'email';

password.className='input-form'
password.type='password';
password.placeholder='Input you password';
password.name='password';
password.id='password'

button.innerText='Log in'
button.className='container__item-right'



var hr= document.createElement('hr')

var divRegister = document.createElement('div');
divRegister.className= 'div-register'

parrafAccount.innerText='Didnt have an account?';

linkRegister.href='register.html';
linkRegister.innerText='Register';
linkRegister.className='register-text'

linkHome.innerText='Home';
linkHome.href='home.html';
linkHome.className='home-text'

divRegister.append(parrafAccount, linkHome, linkRegister)
form.append(emailLabel, email, passwordLabel, password, button,hr, divRegister)
divContenedor.append(form)
document.body.append(divContenedor);
