const settingsPanel = document.createElement('section')
settingsPanel.className = 'flex flex-col gap-2'   //'container container--full-width'

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
settingsEmailInput.value = 'e@gmail.com'
settingsEmailInput.className = 'border-b border-black'

const settingsEmailButton = document.createElement('button')
settingsEmailButton.innerText = 'Save'
settingsEmailButton.className = 'p-2 border rounded-xl hover:animate-spin';

settingsEmailForm.append(settingsEmailLabel, settingsEmailInput, settingsEmailButton)

settingsEmailForm.onsubmit = function(event) {
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