const settingsPanel = document.createElement('section')
settingsPanel.className = 'container container--full-with'

const settingsTitle = document.createElement('h2')
settingsTitle.innerText = 'settings'

const settingsEmailForm = document.createElement('form')

const settingsEmailLabel = document.createElement('label')
settingsEmailLabel.htmlFor = 'settings-email'
settingsEmailLabel.innerText = 'Email'

const settingsEmailInput = document.createElement('input')
settingsEmailInput.placeholder = 'New Email'
settingsEmailInput.id = 'settings-email'
settingsEmailInput.type = 'email'
settingsEmailInput.required = true

const settingsEmailButton = document.createElement('button')
settingsEmailButton.innerText = 'Change'

settingsEmailForm.append(settingsEmailLabel, settingsEmailInput ,settingsEmailButton)

settingsEmailForm.onsubmit = function (event) {

    event.preventDefault()

    const update = settingsEmailInput.value

try {

    updateUserEmail(user.email, update)

    alert('Email update')

    settingsPanel.remove()
    homePage.append(tasksPanel)
    
} catch (error) {
    alert(error.message)
}

    
    
}
settingsPanel.append(settingsTitle, settingsEmailForm)