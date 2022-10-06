var settingsPanel = document.createElement('section')
settingsPanel.className = 'container-Flex'

var settingsEmailForm = document.createElement('form')

var settingsEmailLabel = document.createElement('label')
settingsEmailLabel.innerText = 'E-mail'
settingsEmailLabel.htmlFor = 'settings-email'

var settingsEmailInput = document.createElement('input')
settingsEmailInput.type = 'email'
settingsEmailInput.id = 'settings-email'
settingsEmailInput.placeholder = 'enter your email'

var settingsEmailButton = document.createElement('button')
settingsEmailButton.innerText = 'save'

settingsEmailForm.append(settingsEmailLabel, settingsEmailInput, settingsEmailButton)

