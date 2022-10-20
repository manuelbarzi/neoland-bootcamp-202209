const settingsPanel = document.createElement('section')
settingsPanel.className = 'container container--full-width'

const settingsTitle = document.createElement('h2')
settingsTitle.innerText = 'Settings'

const settingsEmailForm = document.createElement('form')

const settingsEmailLabel = document.createElement('label')
settingsEmailLabel.innerText = 'E-mail'
settingsEmailLabel.htmlFor = 'settings-email'

const settingsEmailInput = document.createElement('input')
settingsEmailInput.type = 'email'
settingsEmailInput.id = 'settings-email'
settingsEmailInput.placeholder = 'input an e-mail'
settingsEmailInput.value = 'e@mail.com'

const settingsEmailButton = document.createElement('button')
settingsEmailButton.innerText = 'Save'

settingsEmailForm.append(settingsEmailLabel, settingsEmailInput, settingsEmailButton)

settingsEmailForm.onsubmit = function (event) {
    event.preventDefault()

    const newEmail = settingsEmailInput.value

    try {
        updateUserEmail(user.email, newEmail)

        alert('E-mail updated')
    } catch (error) {
        alert(error.message)
    }
}

settingsPanel.append(settingsTitle, settingsEmailForm)

