const settingsPanel = document.createElement('section')
settingsPanel.className = 'settings-container'

const settingsTitle = document.createElement('h2')
settingsTitle.innerText = 'Settings'

const settingsEmailForm = document.createElement('form')

const settingsEmailLabel = document.createElement('label')
settingsEmailLabel.innerText = 'E-mail'
settingsEmailLabel.htmlFor = 'settings-email'

const settingsEmailInput = document.createElement('input')
settingsEmailInput.type = 'email'
settingsEmailInput.id = 'settings-email'


const settingsEmailButton = document.createElement('button')
settingsEmailButton.innerText = 'Save'

settingsEmailButton.onclick = function (event) {
    event.preventDefault()

    const newEmail = settingsEmailInput.value
    const email = user.email


    try {
       result = updateEmail(newEmail, email)
       user.email = result
       alert('Email correctly changed')
    } catch(error) {
        alert(error.message)
    }
}



settingsEmailForm.append(settingsEmailLabel, settingsEmailInput, settingsEmailButton)


const settingsPasswordForm = document.createElement('form')

const settingsPasswordLabel = document.createElement('label')
settingsPasswordLabel.innerText = 'password'
settingsPasswordLabel.htmlFor = 'settings-password'

const settingsPasswordInput = document.createElement('input')
settingsPasswordInput.type = ''
settingsPasswordInput.id = 'settings-password'


const settingsPasswordButton = document.createElement('button')
settingsPasswordButton.innerText = 'Save'

settingsPasswordButton.onclick = function (event) {
    event.preventDefault()

    const newPassword = settingsPasswordInput.value



    user.password = newPassword
    alert('Password correctly changed')
}

settingsPasswordForm.append(settingsPasswordLabel, settingsPasswordInput, settingsPasswordButton)

settingsPanel.append(settingsTitle, settingsEmailForm, settingsPasswordForm)


