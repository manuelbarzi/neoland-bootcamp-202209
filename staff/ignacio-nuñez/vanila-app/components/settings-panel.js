var settingsPanel = document.createElement('section')
settingsPanel.className = 'settings-container'

var settingsTitle = document.createElement('h2')
settingsTitle.innerText = 'Settings'

var settingsEmailForm = document.createElement('form')

var settingsEmailLabel = document.createElement('label')
settingsEmailLabel.innerText = 'E-mail'
settingsEmailLabel.htmlFor = 'settings-email'

var settingsEmailInput = document.createElement('input')
settingsEmailInput.type = 'email'
settingsEmailInput.id = 'settings-email'


var settingsEmailButton = document.createElement('button')
settingsEmailButton.innerText = 'Save'

settingsEmailButton.onclick = function (event) {
    event.preventDefault()

    var newEmail = settingsEmailInput.value
    var email = user.email

    var result = updateEmail(newEmail, email)

    if (result instanceof Error) {
        alert(result.message)

        return
    }

    user.email = result
    alert('Email correctly changed')
}

settingsEmailForm.append(settingsEmailLabel, settingsEmailInput, settingsEmailButton)


var settingsPasswordForm = document.createElement('form')

var settingsPasswordLabel = document.createElement('label')
settingsPasswordLabel.innerText = 'password'
settingsPasswordLabel.htmlFor = 'settings-password'

var settingsPasswordInput = document.createElement('input')
settingsPasswordInput.type = ''
settingsPasswordInput.id = 'settings-password'


var settingsPasswordButton = document.createElement('button')
settingsPasswordButton.innerText = 'Save'

settingsPasswordButton.onclick = function (event) {
    event.preventDefault()

    var newPassword = settingsPasswordInput.value



    user.password = newPassword
    alert('Password correctly changed')
}

settingsPasswordForm.append(settingsPasswordLabel, settingsPasswordInput, settingsPasswordButton)

settingsPanel.append(settingsTitle, settingsEmailForm, settingsPasswordForm)


