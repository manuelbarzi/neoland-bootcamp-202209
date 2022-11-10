//-------------THIS IS NAV----------------------
var header = document.createElement('header')
var userName = document.createElement('h3')

var userNameLogin = ""

var imgDivHeader = document.createElement('img')
var nav = document.createElement('nav')
var imgNavHeader = document.createElement('img')
var divHeader = document.createElement('div')
var divBeforeHeader = document.createElement('div')
var imgNavHeaderSpan = document.createElement('span')
var logOutNav = document.createElement('h3')
var mainHome = document.createElement('main')

//header
header.append(divHeader)
header.className = "apply-position-top flex nav-items"
divHeader.append(imgDivHeader)
divHeader.append(userName)
divHeader.className = "flex"
header.append(nav)

nav.append(imgNavHeaderSpan)

//W!!!!!!!!!!!!!IMPORTANT!!!!!!!!!!!!!!! 
//MENU ENABLE IN logic/login-users.js

imgDivHeader.src = "https://thumbs.dreamstime.com/b/icono-de-la-cuenta-de-usuario-ejemplo-s%C3%B3lido-del-logotipo-de-la-persona-pictog-90235639.jpg"
imgDivHeader.style.marginLeft = "1rem"
imgDivHeader.height = "40"
imgDivHeader.width = "40"

//divBeforeHeader
var openHeaderPanel = false

imgNavHeaderSpan.onclick = function () {
    if (openHeaderPanel === false) {
        openHeaderPanel = true
        log('DEBUG', 'open headerPanel')
        header.className = "apply-position-open flex nav-items"
        header.style.height = "3rem"
        body.append(divBeforeHeader)
        imgNavHeaderSpan.innerHTML = "keyboard_double_arrow_up"
    }
    else {
        openHeaderPanel = false
        log('DEBUG', 'close headerPanel')
        header.className = "apply-position-top flex nav-items"
        divBeforeHeader.remove()
        imgNavHeaderSpan.innerHTML = "menu"
    }
}

var logOutHeader = document.createElement('h3')
var imgNavHeaderSpanSettings = document.createElement('span')
var imgNavHeaderSpanLogout = document.createElement('span')

divBeforeHeader.className = "divBeforeHeader"
divBeforeHeader.append(imgNavHeaderSpanSettings)
divBeforeHeader.append(imgNavHeaderSpanLogout)
imgNavHeaderSpanSettings.className = "material-symbols-outlined"
imgNavHeaderSpanLogout.className = "material-symbols-outlined"
imgNavHeaderSpanSettings.textContent = "settings"
imgNavHeaderSpanLogout.textContent = "logout"
imgNavHeaderSpanSettings.height = "100"

//------------------SETTINGS FUNCTIONS-------------------------
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
//-------------FINISH HOME-----------------------

//-------------FINISH NAV-----------------------