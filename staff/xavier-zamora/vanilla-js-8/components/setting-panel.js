
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

var addButonSendEmailSetting = document.createElement('span')
addButonSendEmailSetting.className = "material-symbols-outlined"
addDivEmailSettings.append(addButonSendEmailSetting)
addButonSendEmailSetting.textContent = 'keyboard_double_arrow_right'
addButonSendEmailSetting.style.border = "1px solid black"
addButonSendEmailSetting.style.height = "1.3rem"

addFormSettingPage.className = "all-center"

addButonSendEmailSetting.onclick = function (event) {
    event.preventDefault()
    //TODO AVISAR QUE NO LA PUEDO SEPARAR
    //function validateChangeMail()
    //this function is inside logic/setting-logic.js
    var blockSend = /@/.test(addInputEmailSettingPage.value)
    if (blockSend === false) {
        alert('password need @')
    } else {
        console.log(blockSend)
        var currentemail = userNameLogin
        var newEmail = addInputEmailSettingPage.value

        var result = updateUserEmail(currentemail, newEmail)

        if (result instanceof Error) {
            alert(result.message)
            log('ERROR', 'change email not succes')

            return
        }
        alert('Email updated')
        log('DEBUG', 'email update correct')
    }
}





