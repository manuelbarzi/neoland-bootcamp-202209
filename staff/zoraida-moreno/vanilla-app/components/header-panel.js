const headerPanel = document.createElement('header')

const homeHeaderLink = document.createElement('a')
homeHeaderLink.href = ''
homeHeaderLink.onclick = function(event) {
    event.preventDefault()

    menuPanel.remove()
    headerMenuPanelStatus = 'closed'

    settingsPanel.remove()

    homePage.append(tasksPanel)
}

const headerImage = document.createElement('img')
headerImage.src = 'https://fakeimg.pl/50x25/282828/eae0d0/?retina=1&text=HOLA!'

homeHeaderLink.append(headerImage)

var headerNameText = document.createElement('span')
headerNameText.innerText = 'User Name'
// headerNameText.className = 'container container--full-height container--padding-h-m'

const addTaskButton = document.createElement('button')
addTaskButton.className = 'material-symbols-outlined'
addTaskButton.innerText = 'add'


addTaskButton.onclick = function() {
  try {
    createTask(user.email)

    clearTasksCards()

    renderTasksCards()
  } catch (error) {
    alert(error.message)
    }
}


const headerMenuButton = document.createElement('button')
headerMenuButton.className = 'material-symbol-outlined'
headerMenuButton.innerText = 'menu'

let headerMenuPanelStatus = 'closed'

headerMenuButton.onclick = function() {
    if (headerMenuPanelStatus === 'closed') {
        headerPanel.append(menuPanel)

        headerMenuPanelStatus = 'opened'
    } else {
        menuPanel.remove()

        headerMenuPanelStatus = 'closed'
    }
}

const headerTopPanel = document.createElement('div')
headerTopPanel.className = 'flex justify-beetween'

headerTopPanel.append(homeHeaderLink, headerNameText, addTaskButton, headerMenuButton)

headerPanel.className = 'flex flex-col'
headerPanel.append(headerTopPanel)