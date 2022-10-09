var settingsPanel = document.createElement('section')
settingsPanel.className = 'container-Flex'


var settingsTitle = document.createElement('h2')
settingsTitle.innerText = 'Settings'

var settingsEmailForm = document.createElement('form')


var settingsEmailLabel = document.createElement('label')
settingsEmailLabel.innerText = 'New E-mail'
settingsEmailLabel.htmlFor = 'settings-email'

var settingsEmailInput = document.createElement('input')
settingsEmailInput.type = 'email'
settingsEmailInput.id = 'settings-email'
settingsEmailInput.placeholder = 'enter your new email'

var settingsEmailButton = document.createElement('button')
settingsEmailButton.innerText = 'Save changes'

settingsEmailForm.append(settingsEmailLabel, settingsEmailInput, settingsEmailButton)

settingsEmailForm.onsubmit = function (event) {
    event.preventDefault()

    var newEmail = settingsEmailInput.value

    var result = updateUserEmail(user.email, newEmail)

    if (result instanceof Error) {
        alert(result.message)

        return
    }

    alert('E-mail updated')
}

settingsPanel.append(settingsTitle, settingsEmailForm)

