// Create contextual menu
const contextualMenuComponent = document.createElement('div')
contextualMenuComponent.className = 'contextual-menu'

// Contextual menu elements
const contextualMenuSettings = document.createElement('span')
contextualMenuSettings.innerText = 'settings'
contextualMenuSettings.className = 'material-symbols-outlined contextual-menu-element'


const contextualMenuLogout = document.createElement('span')
contextualMenuLogout.innerText = 'exit_to_app'
contextualMenuLogout.className = 'material-symbols-outlined contextual-menu-element'

contextualMenuComponent.append(contextualMenuSettings, contextualMenuLogout)

contextualMenuLogout.onclick = function (event) {
    event.preventDefault()

    log('DEBUG', 'login')


    settingsComponent.remove()
    homePage.append(tasksComponent)

    homePage.remove()

    currentUser = null
    document.body.append(loginPage)

}

contextualMenuSettings.onclick = function (event) {
    event.preventDefault()

    contextualMenuComponent.remove()
    isContextualMenuActive = false

    log('DEBUG', 'settings')

    tasksComponent.remove()
    homePage.append(settingsComponent)
}
