var homeMenuButton = document.createElement ('button')
homeMenuButton.className = 'material-symbols-outlined'
homeMenuButton.innerText = 'menu'

var homeMenuPanelStatus = 'closed'

homeMenuButton.onclick = function() {
    if (homeMenuPanelStatus === 'closed') {
        homeHeader.append(homeMenuPanel)

        homeMenuPanelStatus = 'opened'
    } else {
        homeMenuPanel.remove()
        
        homeMenuPanelStatus = 'closed'
    }
}

var homeMenuPanel = document.createElement('div')
// homeMenuPanel.className = 'container'


var homeMenuSettingsLink = document.createElement('a')
homeMenuSettingsLink.className = 'icons-menu-settings material-symbols-outlined'
homeMenuSettingsLink.innerText = 'settings'
homeMenuSettingsLink.href =''

homeMenuSettingsLink.onclick = function(event) {
    event.preventDefault()

    homeMenuPanel.remove()
    homeMenuPanelStatus = 'closed'

    tasksPanel.remove()

    settingsEmailInput.value = user.email

    homePage.append(settingsPanel)
}

var languageButton = document.createElement('button')
languageButton.className = 'icons-menu-settings material-symbols-outlined'
languageButton.innerText = 'language'


var homeLogoutButton = document.createElement('button')
homeLogoutButton.className = 'icons-menu-settings material-symbols-outlined'
homeLogoutButton.innerText = 'logout'

homeLogoutButton.onclick = function() {
    user = null
   
    homeMenuPanel.remove()
    homeMenuPanelStatus = 'closed'

    settingsPanel.remove()
    homePage.append(tasksPanel)

    homePage.remove()

    document.body.append(loginPage)
}

homeMenuPanel.append(homeMenuSettingsLink, languageButton, homeLogoutButton)//languageButton agregar aca?//
