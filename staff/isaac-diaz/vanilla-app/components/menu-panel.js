//Aqui se abre el desplegable del menú
var menuPanel = document.createElement('div')
menuPanel.className = 'color container z-index'

var menuSettingsLink = document.createElement('a')
menuSettingsLink.innerText = 'settings'
menuSettingsLink.className = 'material-symbols-outlined'
menuSettingsLink.href = ''
//Aqui hacemos el evento de click 
menuSettingsLink.onclick = function (event) {
    event.preventDefault()

    menuPanel.remove()
    headerMenuPanelStatus = 'closed'

    tasksPanel.remove()

    settingsEmailInput.value = user.email

    homePage.append(settingsPanel)
}

//Aqui hemos de quitar el usuario, abrir el tasksPanel, cerrar la home y abrir la loginPage
var menuLogoutButton = document.createElement('button')
menuLogoutButton.innerText = 'logout'
menuLogoutButton.className = 'material-symbols-outlined'

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