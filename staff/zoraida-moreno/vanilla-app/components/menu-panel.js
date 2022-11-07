const menuPanel = document.createElement('div')
menuPanel.className = 'flex flex-col items-center'

const menuSettingsLink = document.createElement('a')
menuSettingsLink.className = 'material-symbols-outlined'
menuSettingsLink.innerText = 'settings'
menuSettingsLink.href = ''

menuSettingsLink.onclick = function(event) {
    event.preventDefault()

    menuPanel.remove()
    headerMenuPanelStatus = 'closed'

    tasksPanel.remove()

    settingsEmailInput.value = user.email

    homePage.append(settingsPanel)
}

const menuLogoutButton = document.createElement('button')
menuLogoutButton.className = 'material-symbols-outlined'
menuLogoutButton.innerText = 'logout'

menuLogoutButton.onclick = function() {
    user = null

    menuPanel.remove()
    headerMenuPanelStatus = 'closed'

    settingsPanel.remove()
    homePage.append(tasksPanel)

    homePage.remove()

    document.body.append(loginPage)
    
}

menuPanel.append(menuSettingsLink, menuLogoutButton)