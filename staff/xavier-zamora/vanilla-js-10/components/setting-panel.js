
var settingsPanel = document.createElement('section')
settingsPanel.className = "container display-screen"

var addFormSettingPage = document.createElement('form')
settingsPanel.append(addFormSettingPage)

var addTitleSettingPage = document.createElement('h3')
addFormSettingPage.append(addTitleSettingPage)
addTitleSettingPage.innerHTML = "SETTINGS"
addTitleSettingPage.style.marginTop = "2rem"

var addDivEmailSettings = document.createElement('div')
addFormSettingPage.append(addDivEmailSettings)
addDivEmailSettings.className = "flex center-items"

var addInputEmailSettingPage = document.createElement('input')
addInputEmailSettingPage.type = "email"
addInputEmailSettingPage.placeholder = "change ur email"
addInputEmailSettingPage.style.marginTop = "0rem"
addInputEmailSettingPage.style.height = "1.3rem"
addDivEmailSettings.style.height = "2rem"
addDivEmailSettings.append(addInputEmailSettingPage)

var addButonSendEmailSetting = document.createElement('button')
addButonSendEmailSetting.className = "material-symbols-outlined"
addDivEmailSettings.append(addButonSendEmailSetting)
addButonSendEmailSetting.innerHTML = '<h5>keyboard_double_arrow_right</h5>'
addButonSendEmailSetting.style.border = "1px solid black"
addButonSendEmailSetting.style.height = "1.3rem"

addFormSettingPage.className = "all-center"

addFormSettingPage.onsubmit = function (event) {
    event.preventDefault()
    //function validateChangeMail()
    //this function is inside logic/setting-logic.js
    var currentemail = userNameLogin
    var newEmail = addInputEmailSettingPage.value

    var result = updateUserEmail(currentemail, newEmail)


    if (result instanceof Error){
        alert(result.message)
        log('ERROR', 'change email not succes')

        return
    }
    alert('Email updated')
    log('DEBUG', 'email update correct')
    divHeader.click()
    
}





