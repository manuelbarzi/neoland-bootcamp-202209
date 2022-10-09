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

var homeHeaderImage = document.createElement('button')
homeHeaderImage.className = 'material-symbols-outlined'
homeHeaderImage.innerText = 'Home' // como poner logo trello??
homeHeaderLink.append(homeHeaderImage)

//homeUserNameText es igual que userName//
var userName = document.createElement('span')
userName.innerText = 'User Name'
userName.className = ' user-name'
//probar si funcionan container--full-height container--padding-h-s//

var searchButton = document.createElement('button')
searchButton.className ='material-symbols-outlined'
searchButton.innerText = 'Search'

var homeHeaderTopPanel = document.createElement('div')
homeHeaderTopPanel.className = 'container container--row container--full-width container--content-space-between'

var homeHeaderTopPanelRight = document.createElement('div')
homeHeaderTopPanelRight.append(searchButton, homeMenuButton)

var homeHeaderTopPanelLeft = document.createElement('div')
homeHeaderTopPanelLeft.append(homeHeaderLink, userName)
homeHeaderTopPanel.append(homeHeaderTopPanelLeft, homeHeaderTopPanelRight)


homeHeader.className = 'container container--full-width'
homeHeader.append(homeHeaderTopPanel)