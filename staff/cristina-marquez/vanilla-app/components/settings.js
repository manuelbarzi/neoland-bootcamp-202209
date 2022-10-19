const settingsComponent = document.createElement('section')
settingsComponent.className = 'container-Flex'


const settingsTitle = document.createElement('h2')
settingsTitle.innerText = 'Settings'

const settingsEmailForm = document.createElement('form')


const settingsEmailLabel = document.createElement('label')
settingsEmailLabel.innerText = 'New E-mail'
settingsEmailLabel.htmlFor = 'settings-email'

const settingsEmailInput = document.createElement('input')
settingsEmailInput.type = 'email'
settingsEmailInput.id = 'settings-email'
settingsEmailInput.placeholder = 'enter your new email'

const settingsEmailButton = document.createElement('button')
settingsEmailButton.innerText = 'Save changes'

settingsEmailForm.append(settingsEmailLabel, settingsEmailInput, settingsEmailButton)

settingsEmailForm.onsubmit = function (event) {
    event.preventDefault()

    const newEmail = settingsEmailInput.value

    const result = updateUserEmail(currentUser.email, newEmail)

    if (result instanceof Error) {
        alert(result.message)

        return
    }

    alert('E-mail updated')
}

settingsComponent.append(settingsTitle, settingsEmailForm)

