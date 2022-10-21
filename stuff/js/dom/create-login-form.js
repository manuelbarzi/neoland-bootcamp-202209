form = document.createElement('form')
<form>​</form>​
email = document.createElement('input')
<input>​
password = document.createElement('input')
<input>​
button = document.createElement('button')
<button>​</button>​
form.append(email, password, button)
undefined
form
<form>​…​</form>​<input>​<input>​<button>​</button>​</form>​
email.type = 'email'
'email'
email
<input type=​"email">​
email.placeholder = 'input your e-mail'
'input your e-mail'
email
<input type=​"email" placeholder=​"input your e-mail">​
form
<form>​…​</form>​<input type=​"email" placeholder=​"input your e-mail">​<input>​<button>​</button>​</form>​
password.type = 'password'
'password'
password.placeholder = 'me cago en tus m...'
'me cago en tus m...'
form
<form>​…​</form>​<input type=​"email" placeholder=​"input your e-mail">​<input type=​"password" placeholder=​"me cago en tus m...">​<button>​</button>​</form>​
password.placeholder = 'input your password'
'input your password'
form
<form>​…​</form>​<input type=​"email" placeholder=​"input your e-mail">​<input type=​"password" placeholder=​"input your password">​<button>​</button>​</form>​
button.innerText = 'Login'
'Login'
form
<form>​…​</form>​<input type=​"email" placeholder=​"input your e-mail">​<input type=​"password" placeholder=​"input your password">​<button>​Login​</button>​</form>​
document.body.append(form)
undefined