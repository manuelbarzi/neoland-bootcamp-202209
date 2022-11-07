log('DEBUG', 'mount home')

var homeHeader = document.createElement('header')

var homeHeaderLink = document.createElement('a')
homeHeaderLink.href = ''
homeHeaderLink.onclick = function(event) {
    event.preventDefault()

    homeMenuPanel.remove()
    homeMenuPanelStatus = 'closed'

    settingsPanel.remove()

    homePage.append(tasksPanel)
}

var homeHeaderImage = document.createElement('img')
homeHeaderImage.src = 'https://fakeimg.pl/50x25/282828/eae0d0/?retina=1&text=HOLA!'

homeHeaderLink.append(homeHeaderImage)

var homeUserNameText = document.createElement('span')
homeUserNameText.innerText = 'User Name'
homeUserNameText.className = 'container container--full-height container--padding-h-m'

var homeMenuButton = document.createElement('button')
homeMenuButton.className = 'material-symbol-outlined'
homeMenuButton.innerText = 'menu'

var homeMenuPanelStatus = 'closed'

homeMenuButton.onclick = function() {
    if(homeMenuPanelStatus === 'closed') {
        homeHeader.append(homeMenuPanel)

        homeMenuPanelStatus = 'opened'
    } else {
        homeMenuPanel.remove()

        homeMenuPanelStatus = 'closed'
    }
}

var homeMenuPanel = document.createElement('div')
homeMenuPanel.className = 'container'

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

var homeHeaderTopPanel = document.createElement('div')
homeHeaderTopPanel.className = 'container container--row container--full-width container--content-space-between'

homeHeaderTopPanel.append(homeHeaderLink, homeUserNameText, homeMenuButton)

homeHeader.className = 'container container--full-width'
homeHeader.append(homeHeaderTopPanel)

var homePage = document.createElement('main')
homePage.className = 'container container--full container--content-start'

homePage.append(homeHeader, tasksPanel)