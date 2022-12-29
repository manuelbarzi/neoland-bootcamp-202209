const homeHeader = document.createElement('header')
homeHeader.className = 'container container--full-width container--content-space-between'

const homeMenuButton = document.createElement ('button')
homeMenuButton.className = 'container container--row material-symbols-outlined'
homeMenuButton.innerText = 'menu'

let homeMenuPanelStatus = 'closed'

homeMenuButton.onclick = function() {
    if (homeMenuPanelStatus === 'closed') {
        homeHeader.append(homeMenuPanel)

        homeMenuPanelStatus = 'opened'
    } else {
        homeMenuPanel.remove()
        
        homeMenuPanelStatus = 'closed'
    }
}

const homeHeaderLink = document.createElement('a')
homeHeaderLink.href = ''
homeHeaderLink.onclick = function(event) {
    event.preventDefault()

    homeMenuPanel.remove()
    homeMenuPanelStatus = 'closed'

    settingsPanel.remove()

    homePage.append(tasksPanel)
}
const logoTrello = document.createElement('img')
logoTrello.src = 'https://1000logos.net/wp-content/uploads/2021/05/Trello-logo.png'
logoTrello.className = ' logo-trello'
 homeHeaderLink.append(logoTrello)

const userName = document.createElement('span')
userName.innerText = 'User Name'
userName.className = ' user-name'


const searchButton = document.createElement('button')
searchButton.className ='material-symbols-outlined'
searchButton.innerText = 'Search'

const homeHeaderTopPanel = document.createElement('div')
homeHeaderTopPanel.className = 'container container--row container--full-width container--content-space-between'

const homeHeaderTopPanelRight = document.createElement('div')
homeHeaderTopPanelRight.append(searchButton, homeMenuButton)

const homeHeaderTopPanelLeft = document.createElement('div')
homeHeaderTopPanelLeft.append(userName)
homeHeaderTopPanel.append(homeHeaderTopPanelLeft, homeHeaderTopPanelRight)



homeHeader.append(homeHeaderLink, homeHeaderTopPanel)