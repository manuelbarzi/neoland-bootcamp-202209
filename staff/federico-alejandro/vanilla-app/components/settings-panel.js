const settingsPanel = document.createElement('section')
settingsPanel.className = 'container container--full-width'

const settingsTitle = document.createElement('h2')
settingsTitle.innerText = 'settings'
settingsTitle.className = ''

const updateForm = document.createElement('div')
updateForm.className = 'update-form'

const settingsEmailForm = document.createElement('form')

const settingsEmailLabel = document.createElement('label')
settingsEmailLabel.innerText = 'E-mail '
settingsEmailLabel.htmlFor = 'settings-email'

const settingsEmailInput = document.createElement('input')
settingsEmailInput.type = 'email'
settingsEmailInput.id = 'settings-email'
settingsEmailInput.placeholder = 'input an e-mail'
settingsEmailInput.value = 'e@mail.com'

const settingsEmailButton = document.createElement('button')
settingsEmailButton.innerText = ' Save'
settingsEmailButton.className = 'buttons--save'

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

const settingsNameForm = document.createElement('form')

const settingsNameLabel = document.createElement('label')
settingsNameLabel.innerText = 'Name '
settingsNameLabel.htmlFor = 'settings-name'

const settingsNameInput = document.createElement('input')
settingsNameInput.type = 'text'
settingsNameInput.id = 'settings-name'
settingsNameInput.placeholder = 'input a name'
settingsNameInput.value = ''

const settingsNameButton = document.createElement('button')
settingsNameButton.innerText = 'Save'
settingsNameButton.className = 'buttons--save'


settingsNameForm.append(settingsNameLabel, settingsNameInput, settingsNameButton)
settingsNameForm.onsubmit = function (event) {
    event.preventDefault()

    const newName = settingsNameInput.value
    try {
        updateUserName(user.name, newName)

        alert('Name updated')
    } catch (error) {

        alert(error.message)
    }
}
const settingsPasswordForm = document.createElement('form')

const settingsLabelPassword = document.createElement('label')
settingsLabelPassword.htmlFor = 'settings-password'
settingsLabelPassword.innerText = 'Password '

const settingsPassword = document.createElement('input')
settingsPassword.type = 'password'
//settingsPassword.name = ''
settingsPassword.id = 'settings-password'
settingsPassword.placeholder = 'input new password'


const settingsPasswordButton = document.createElement('button')
settingsPasswordButton.innerText = 'Save'
settingsPasswordButton.className = 'buttons--save'

settingsPasswordForm.onsubmit = function (event) {
    event.preventDefault()

    log('DEBUG', 'Submit new password')

    const newPassword = settingsPassword.value
    
    try {
        updateUserPassword(user.password, newPassword)

        alert('Password updated')

        updatePasswordForm.reset()

    } catch (error) {
    
        alert(error.message)
    }
}
settingsPasswordForm.append(settingsLabelPassword, settingsPassword, settingsPasswordButton)
updateForm.append(settingsEmailForm, settingsNameForm, settingsPasswordForm)
settingsPanel.append(settingsTitle, updateForm)








