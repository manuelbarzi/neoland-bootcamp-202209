var settingsPanel = document.createElement('section')
settingsPanel.className = 'container container--full-width'

var settingsTitle = document.createElement('h2')
settingsTitle.innerText = 'settings'
settingsTitle.className = ''

var updateForm = document.createElement('div')
updateForm.className = 'update-form'

var settingsEmailForm = document.createElement('form')

var settingsEmailLabel = document.createElement('label')
settingsEmailLabel.innerText = 'E-mail '
settingsEmailLabel.htmlFor = 'settings-email'

var settingsEmailInput = document.createElement('input')
settingsEmailInput.type = 'email'
settingsEmailInput.id = 'settings-email'
settingsEmailInput.placeholder = 'input an e-mail'
settingsEmailInput.value = 'e@mail.com'

var settingsEmailButton = document.createElement('button')
settingsEmailButton.innerText = ' Save'
settingsEmailButton.className = 'buttons--save'

settingsEmailForm.append(settingsEmailLabel, settingsEmailInput, settingsEmailButton)

settingsEmailForm.onsubmit = function (event) {
    event.preventDefault()

    var newEmail = settingsEmailInput.value
    
    try {
        updateUserEmail(user.email, newEmail)

        alert('E-mail updated')
    } catch (error) {
    
        alert(error.message)
    }
}

var settingsNameForm = document.createElement('form')

var settingsNameLabel = document.createElement('label')
settingsNameLabel.innerText = 'Name '
settingsNameLabel.htmlFor = 'settings-name'

var settingsNameInput = document.createElement('input')
settingsNameInput.type = 'text'
settingsNameInput.id = 'settings-name'
settingsNameInput.placeholder = 'input a name'
settingsNameInput.value = ''

var settingsNameButton = document.createElement('button')
settingsNameButton.innerText = 'Save'
settingsNameButton.className = 'buttons--save'


settingsNameForm.append(settingsNameLabel, settingsNameInput, settingsNameButton)
settingsNameForm.onsubmit = function (event) {
    event.preventDefault()

    var newName = settingsNameInput.value
    try {
        updateUserName(user.name, newName)

        alert('Name updated')
    } catch (error) {

        alert(error.message)
    }
}
var settingsPasswordForm = document.createElement('form')

var settingsLabelPassword = document.createElement('label')
settingsLabelPassword.htmlFor = 'settings-password'
settingsLabelPassword.innerText = 'Password '

var settingsPassword = document.createElement('input')
settingsPassword.type = 'password'
//settingsPassword.name = ''
settingsPassword.id = 'settings-password'
settingsPassword.placeholder = 'input new password'


var settingsPasswordButton = document.createElement('button')
settingsPasswordButton.innerText = 'Save'
settingsPasswordButton.className = 'buttons--save'

settingsPasswordForm.onsubmit = function (event) {
    event.preventDefault()

    log('DEBUG', 'Submit new password')

    var newPassword = settingsPassword.value
    
    try {
        updateUserPassword(user.password, newPassword)

        alert('Password updated')

        updatePasswordForm.reset()

    } catch (error) {
    
        alert(error.message)
    }
}
settingsPasswordForm.append(settingsLabelPassword, settingsPassword, settingsPasswordButton)
updateForm.append(settingsEmailForm, settingsNameForm, settingsPasswordForm)
settingsPanel.append(settingsTitle, updateForm)








