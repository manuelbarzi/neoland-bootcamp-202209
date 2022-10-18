log('INFO', 'start app')

var user = null
// var user = users[2]
// headerUserNameText.innerText = user.name

document.body.append(loginPage)
// document.body.append(homePage)

loginEmailInput.value = 'dany@gmail.com'
loginPasswordInput.value = '12345678'
// loginForm.submit() // WARN this submit the form (preventDefault does not act)
 loginSubmitButton.click()