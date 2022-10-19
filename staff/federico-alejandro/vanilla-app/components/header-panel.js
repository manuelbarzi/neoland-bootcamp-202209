var homeHeader = document.createElement('header')
homeHeader.className = 'container container--full-width container--content-space-between'

var homeMenuButton = document.createElement ('button')
homeMenuButton.className = 'container container--row material-symbols-outlined'
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

var homeHeaderLink = document.createElement('a')
homeHeaderLink.href = ''
homeHeaderLink.onclick = function(event) {
    event.preventDefault()

    homeMenuPanel.remove()
    homeMenuPanelStatus = 'closed'

    settingsPanel.remove()

    homePage.append(tasksPanel)
}
var logoTrello = document.createElement('img')
logoTrello.src = 'https://1000logos.net/wp-content/uploads/2021/05/Trello-logo.png'
logoTrello.className = ' logo-trello'
 homeHeaderLink.append(logoTrello)

var userName = document.createElement('span')
userName.innerText = 'User Name'
userName.className = ' user-name'


var searchButton = document.createElement('button')
searchButton.className ='material-symbols-outlined'
searchButton.innerText = 'Search'

var homeHeaderTopPanel = document.createElement('div')
homeHeaderTopPanel.className = 'container container--row container--full-width container--content-space-between'

var homeHeaderTopPanelRight = document.createElement('div')
homeHeaderTopPanelRight.append(searchButton, homeMenuButton)

var homeHeaderTopPanelLeft = document.createElement('div')
homeHeaderTopPanelLeft.append(userName)
homeHeaderTopPanel.append(homeHeaderTopPanelLeft, homeHeaderTopPanelRight)



homeHeader.append(homeHeaderLink, homeHeaderTopPanel)