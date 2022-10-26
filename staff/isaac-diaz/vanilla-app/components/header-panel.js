//Aqui empieza el header
const headerPanel = document.createElement('header')
headerPanel.className = 'flex flex-col w-full'

//Anchor de la imagen para que derive al inicio de nuevo
const headerHomeLink = document.createElement('a')
headerHomeLink.className = 'h-10'
headerHomeLink.href = ''
headerHomeLink.onclick = function (event) {
    event.preventDefault()

    menuPanel.remove()
    headerMenuPanelStatus = 'closed'

    settingsPanel.remove()

    homePage.append(tasksPanel)
} 

const headerImage = document.createElement('img')
headerImage.src = 'https://www.tienda.lacasa.es/1057-large_default/lacasitos-tubos-4-uds-20-g.jpg'
headerImage.className = 'h-10'

//Declaracion de la imagen en el anchor
headerHomeLink.append(headerImage)

//Aqui se pone el nombre del usuario que ha iniciado la sesion
const headerUserNameText = document.createElement('span')
headerUserNameText.innerText = 'User Name'
headerUserNameText.className = 'flex flex-col h-full p-2px'

//Agregamos un boton para añadir tarea

const addTaskButton = document.createElement('button')
addTaskButton.innerText = 'add'
addTaskButton.className = 'material-symbols-outlined bg-gray-400'

addTaskButton.onclick = function(){    
    try{
    createTask(user.email)

    clearTasksCards()

    renderTasksCards()

    }catch (error) {
        alert(error.message)
    }

    
    }

//Aqui empieza el panel del boton menú
const headerMenuButton = document.createElement('button')
headerMenuButton.innerText = 'menu'
headerMenuButton.className = 'material-symbols-outlined'

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
headerTopPanel.className = 'flex justify-between'

//Declaracion del Anchor de la imagen, el nombre de usuario logeado y el boton de menú
headerTopPanel.append(headerHomeLink, headerUserNameText, addTaskButton, headerMenuButton)


headerPanel.append(headerTopPanel)