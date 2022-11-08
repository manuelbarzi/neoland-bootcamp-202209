var settingsPanel = document.createElement('section')
settingsPanel.className = 'container container--full-width'

var settingsTittle = document.createElement('h2')
settingsTittle.innerText = 'Settings'

var settingsEmailForm = document.createElement('form')


var settingsEmailLabel = document.createElement('label')
settingsEmailLabel.innerText = 'E-mail'
settingsEmailLabel.htmlFor = 'setting-email'

var settingsEmailInput = document.createElement('input')
settingsEmailInput.type = 'email'
settingsEmailInput.id = 'setting-email'
settingsEmailInput.placeholder = 'input an e-mail'
settingsEmailInput.value = 'e@mail.com'

var settingsEmailButton = document.createElement('button')
settingsEmailButton.innerText = 'Save'

settingsEmailForm.append(settingsEmailLabel, settingsEmailInput, settingsEmailButton)

settingsEmailForm.onsubmit = function(event){
    event.preventDefault()

    var newEmail = settingsEmailInput.value

    var result = updateUserEmail(user.email, newEmail)

    if(result instanceof Error){
    alert(result.message)

    return

}
alert('E-mail update')
}

settingsPanel.append(settingsTittle, settingsEmailForm)