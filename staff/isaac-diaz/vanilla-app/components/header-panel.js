//Aqui empieza el header
var headerPanel = document.createElement('header')
headerPanel.className = 'container container--full-width header--height'

//Anchor de la imagen para que derive al inicio de nuevo
var headerHomeLink = document.createElement('a')
headerHomeLink.className = ''
headerHomeLink.href = ''
headerHomeLink.onclick = function (event) {
    event.preventDefault()

    menuPanel.remove()
    headerMenuPanelStatus = 'closed'

    settingsPanel.remove()

    homePage.append(tasksPanel)
} 

var headerImage = document.createElement('img')
headerImage.src = 'https://www.tienda.lacasa.es/1057-large_default/lacasitos-tubos-4-uds-20-g.jpg'
headerImage.className = 'image--width'

//Declaracion de la imagen en el anchor
headerHomeLink.append(headerImage)

//Aqui se pone el nombre del usuario que ha iniciado la sesion
var headerUserNameText = document.createElement('span')
headerUserNameText.innerText = 'User Name'
headerUserNameText.className = 'container container--full-height container--padding-h-s'

//Agregamos un boton para añadir tarea

var addTaskButton = document.createElement('button')
addTaskButton.innerText = 'add'
addTaskButton.className = 'material-symbols-outlined'

addTaskButton.onclick = function(){    
    var result = createTask(user.email)

    if(result instanceof Error) {
    alert(result.message)

    return
    }
    clearTasksCards()

    renderTasksCards()
}
//Aqui empieza el panel del boton menú
var headerMenuButton = document.createElement('button')
headerMenuButton.innerText = 'menu'
headerMenuButton.className = 'material-symbols-outlined'

var headerMenuPanelStatus = 'closed'

headerMenuButton.onclick = function() {
    if (headerMenuPanelStatus === 'closed') {
        headerPanel.append(menuPanel)

        headerMenuPanelStatus = 'opened'
    } else {
        menuPanel.remove()

        headerMenuPanelStatus = 'closed'
    }
}

var headerTopPanel = document.createElement('div')
headerTopPanel.className = 'color container container--row container--full-width container--content-space-between container--full-height'

//Declaracion del Anchor de la imagen, el nombre de usuario logeado y el boton de menú
headerTopPanel.append(headerHomeLink, headerUserNameText, addTaskButton, headerMenuButton)


headerPanel.append(headerTopPanel)