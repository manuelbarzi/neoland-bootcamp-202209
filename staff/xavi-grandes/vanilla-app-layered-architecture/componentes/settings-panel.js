var settingsPanel = document.createElement('section')
settingsPanel.className = 'rellenar'

var settingsTitle = document.createElement('h2')
    settingsTitle.innerText = 'Settings'

var settingsEmailForm = document.createElement('form')

var settingsEmailLabel = document.createElement('label')
    settingsEmailLabel.htmlFor = 'E-mail'
    settingsEmailLabel.innerText = 'E-mail'

var settingsEmailInput = document.createElement('input')
    settingsEmailInput.id = 'E-mail'
    settingsEmailInput.type = 'email'
    settingsEmailInput.placeholder = 'Input your e-mail'
    settingsEmailInput.value = ' '

var settingEmailButton = document.createElement('button')
    settingEmailButton.innerText = 'Save'

settingsEmailForm.append(settingsEmailLabel, settingsEmailInput, settingEmailButton)

settingsPanel.append(settingsEmailForm)
