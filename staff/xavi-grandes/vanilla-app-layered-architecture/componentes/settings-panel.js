var settingsPanel = document.createElement('section')
settingsPanel.className = 'setting-panel'

var settingsPanelContainer = document.createElement('section')
    settingsPanelContainer.className = 'panel-form-settings'

var settingsTitle = document.createElement('h2')
    settingsTitle.innerText = 'Settings'

var settingsline = document.createElement('hr')

var settingsText = document.createElement('p')
    settingsText.className = 'settings-intro'
    settingsText.innerText = 'Change your data profile'

var settingsEmailForm = document.createElement('form')

var settingsEmailLabel = document.createElement('label')
    settingsEmailLabel.htmlFor = 'E-mail'
    settingsEmailLabel.innerText = 'E-mail'

var settingsEmailInput = document.createElement('input')
    settingsEmailInput.id = 'E-mail'
    settingsEmailInput.type = 'email'
    settingsEmailInput.placeholder = 'Input your e-mail'
    settingsEmailInput.value = ' '

var settingsPasswordLabel = document.createElement('label')
    settingsPasswordLabel.htmlFor = 'password'
    settingsPasswordLabel.innerText = 'password'

var settingsPasswordInput = document.createElement('input')
    settingsPasswordInput.id = 'password'
    settingsPasswordInput.type = 'password'
    settingsPasswordInput.placeholder = 'Input your new password'
    settingsPasswordInput.value = ' '

var settingFormButton = document.createElement('button')
    settingFormButton.innerText = 'Save'

settingsEmailForm.append(settingsTitle, settingsline, settingsText, settingsEmailLabel, settingsEmailInput, settingsPasswordLabel, settingsPasswordInput, settingFormButton)

settingsPanelContainer.append(settingsEmailForm)

settingsPanel.append(settingsPanelContainer)
