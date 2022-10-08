//------------------NAV FUNCTIONS-------------------------
//THIS GO TO TASK PANEL
divHeader.onclick = function (event) {

    //ONLY CAN ENTER TO TASK IF SINGIN
    if (userNameLogin.length > 1) {
        event.preventDefault()
        log('DEBUG', 'return at task-panel')

        //DONE return at task-panel.js

        //This part add task-panel and remove the rest
        document.body.append(taskPanel)
        settingsPanel.remove()
        mainLogin.remove()
        mainRegister.remove()
        addTaskMenu.remove()

        //this part close menu
        openHeaderPanel = true
        imgNavHeaderSpan.click()
    }
}

//LOGOUTFUNCTION
imgNavHeaderSpanLogout.onclick = function (event) {
    event.preventDefault()
    user = null;
    log('DEBUG', 'logout')
    mainLogin.remove()
    mainHome.remove()
    mainRegister.remove()
    taskPanel.remove()
    settingsPanel.remove()
    document.body.append(mainLogin)

    //This part close menu
    openHeaderPanel = true
    imgNavHeaderSpan.click()

    //This part "LOGOUT"
    userNameLogin = ""
    userName.innerHTML = ""

    //This part remove menu
    imgNavHeaderSpan.remove()
}

//OPEN SETTINGS MENU
imgNavHeaderSpanSettings.onclick = function (event) {
    event.preventDefault()
    log('DEBUG', 'open setings page')
    document.body.append(settingsPanel)
    mainLogin.remove()

    //This part close menu
    openHeaderPanel = true
    imgNavHeaderSpan.click()
    taskPanel.remove()
}