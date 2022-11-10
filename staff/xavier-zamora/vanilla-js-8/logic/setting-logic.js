//THIS FUNCTION UPDATE USER
function updateUserEmail(currentemail, newEmail) {
    var hasGmail = /gmail/.test(addInputEmailSettingPage.value)
    var hasHotmail = /hotmail/.test(addInputEmailSettingPage.value)
    var hasYahoo = /yahoo/.test(addInputEmailSettingPage.value)
    var blockSend = (hasGmail || hasHotmail || hasYahoo)

    if (blockSend) {
        var i = users.length;
        while (i > 0) {
            i--
            var user = users[i]

            if (currentemail === newEmail) {
                return new Error('user whit email ' + newEmail + ' already exists');
            }
        }
        var indexJ = users.length
        while (indexJ > 0) {
            indexJ--
            var user = users[indexJ]

            if (user.email === currentemail) {
                user.email = newEmail
                userName.innerHTML = newEmail
                userNameLogin = newEmail

                return null
            }
        }
        return new Error('user whit email ' + currentemail + ' not found')
    } else {
        return new Error('user whit email ' + newEmail + ' not have gmail, hotmail or yahoo');
    }
}


