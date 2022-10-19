var homeMenuPanel = document.createElement('div')
homeMenuPanel.className = 'container container-menu-panel'


var homeMenuSettingsLink = document.createElement('a')
homeMenuSettingsLink.className = 'material-symbols-outlined'
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

var homeLogoutButton = document.createElement('button')
homeLogoutButton.className = 'material-symbols-outlined'
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

homeMenuPanel.append(homeMenuSettingsLink, homeLogoutButton)
