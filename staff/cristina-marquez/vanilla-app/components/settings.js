const settingsComponent = document.createElement('section')
settingsComponent.className = 'flex flex-col items-center'


const settingsTitle = document.createElement('h2')
settingsTitle.innerText = 'Settings'
settingsTitle.className = 'text-4xl m-5'

const settingsEmailForm = document.createElement('form')
settingsEmailForm.className = 'flex flex-col items-center gap-3 border-2 rounded-md text-lg p-4'


const settingsEmailLabel = document.createElement('label')
settingsEmailLabel.innerText = 'New E-mail'
settingsEmailLabel.htmlFor = 'settings-email'

const settingsEmailInput = document.createElement('input')
settingsEmailInput.type = 'email'
settingsEmailInput.id = 'settings-email'
settingsEmailInput.placeholder = 'enter your new email'
settingsEmailInput.className = 'pl-1 border-2 rounded-md'

const settingsEmailButton = document.createElement('button')
settingsEmailButton.innerText = 'Save changes'
settingsEmailButton.className = `bg-pink-500 hover:bg-pink-600 text-${cssPrimaryColorText} rounded-md p-2`

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

