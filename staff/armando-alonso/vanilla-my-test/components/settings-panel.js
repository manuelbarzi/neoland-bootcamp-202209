var settingsPanel = document.createElement('section')
settingsPanel.className = 'container container--full-with'

var settingsTitle = document.createElement('h2')
settingsTitle.innerText = 'settings'

var settingsEmailForm = document.createElement('form')

var settingsEmailLabel = document.createElement('label')
settingsEmailLabel.htmlFor = 'settings-email'
settingsEmailLabel.innerText = 'Email'

var settingsEmailInput = document.createElement('input')
settingsEmailInput.placeholder = 'New Email'
settingsEmailInput.id = 'settings-email'
settingsEmailInput.type = 'email'
settingsEmailInput.required = true

var settingsEmailButton = document.createElement('button')
settingsEmailButton.innerText = 'Change'

settingsEmailForm.append(settingsEmailLabel, settingsEmailInput ,settingsEmailButton)

settingsEmailForm.onsubmit = function (event) {

    event.preventDefault()

    var update = settingsEmailInput.value

    var result = updateUserEmail(user.email, update)

    if (result instanceof Error) {
        alert(result.message)

        return
    }

    alert('Email update')

    settingsPanel.remove()
    homePage.append(tasksPanel)
    
}
settingsPanel.append(settingsTitle, settingsEmailForm)