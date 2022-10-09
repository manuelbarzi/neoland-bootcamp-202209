

var settingsPanel = document.createElement('section')
settingsPanel.className ='container container--full-width'

var settingsTitle = document.createElement('h2')
settingsTitle.innerText ='settings'
settingsTitle.className =''

var settingsEmailForm = document.createElement('form')

var settingsEmailLabel = document.createElement('label')
settingsEmailLabel.innerText = 'E-mail '
settingsEmailLabel.htmlFor = 'settings-email'

var settingsEmailInput = document.createElement('input')
settingsEmailInput.type = 'email'
settingsEmailInput.id = 'settings-email'
settingsEmailInput.placeholder = 'input an e-mail'
settingsEmailInput.value = 'e@mail.com'

var settingsEmailButton = document.createElement('button')
settingsEmailButton.innerText = ' Save'
settingsEmailButton.className = 'buttons--save'

settingsEmailForm.append(settingsEmailLabel, settingsEmailInput, settingsEmailButton)

settingsEmailForm.onsubmit = function(event) {
    event.preventDefault()

    var newEmail = settingsEmailInput.value

    var result = updateUserEmail(user.email, newEmail)

    if (result instanceof Error) {
        alert(result.message)

        return
    }

    alert('E-mail updated')

} 

var settingsNameForm = document.createElement('form')

var settingsNameLabel = document.createElement('label')
settingsNameLabel.innerText = 'Name '
settingsNameLabel.htmlFor = 'settings-name'

var settingsNameInput = document.createElement('input')
settingsNameInput.type = 'text'
settingsNameInput.id = 'settings-name'
settingsNameInput.placeholder = 'input a name'
settingsNameInput.value = ''

var settingsNameButton = document.createElement('button')
settingsNameButton.innerText = 'Save'
settingsNameButton.className = 'buttons--save'


settingsNameForm.append(settingsNameLabel, settingsNameInput, settingsNameButton)
settingsNameForm.onsubmit = function(event) {
    event.preventDefault()

    var newName = settingsNameInput.value

    var result = updateUserName(user.name, newName)

    if (result instanceof Error) {
        alert(result.message)

        return
    }

    alert('Name updated')

} 

var settingsPhoneNumberForm = document.createElement('form')

var settingsPhoneNumberLabel = document.createElement('label')
settingsPhoneNumberLabel.innerText = 'Phone '
settingsPhoneNumberLabel.htmlFor = 'settings-number'

var settingsPhoneNumberInput = document.createElement('input')
settingsPhoneNumberInput.type = 'Phone Number'
settingsPhoneNumberInput.id = 'settings-number'
settingsPhoneNumberInput.placeholder = 'Ej. +34668899999'
settingsPhoneNumberInput.value = ''

var settingsPhoneNumberButton = document.createElement('button')
settingsPhoneNumberButton.innerText = 'Save'
settingsPhoneNumberButton.className = 'buttons--save'

settingsPhoneNumberForm.append( settingsPhoneNumberLabel, settingsPhoneNumberInput, settingsPhoneNumberButton)

settingsPhoneNumberForm.onsubmit = function(event) {
    event.preventDefault()

    var newPhoneNumber = settingsPhoneNumberInput.value

    var result = updateUserName(user.phoneNumber, newPhoneNumber)

    if (result instanceof Error) {
        alert(result.message)

        return
    }

    alert('Phone Number updated')

} 




settingsPanel.append(settingsTitle, settingsEmailForm, settingsNameForm, settingsPhoneNumberForm)