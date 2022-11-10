//ADD TASK PANEL
var taskPanel = document.createElement('section')
taskPanel.className = "display-screen-home"

//ADD PANEL TITLE DIV FOR H3
var taskPanelTitleDiv = document.createElement('div')
taskPanel.append(taskPanelTitleDiv)
taskPanelTitleDiv.style.width = "100%"
taskPanelTitleDiv.style.height = "10%"
taskPanelTitleDiv.className = "justify-content-center"

//ADD H3 TITLE
var taskPanelTitel = document.createElement('h2')
taskPanelTitleDiv.append(taskPanelTitel)
taskPanelTitel.innerHTML = "ADD TASKS"

//ADD CONTAINER DIV
var taskPanelDiv = document.createElement('div')
taskPanelDiv.className = "containerPanel"
taskPanel.append(taskPanelDiv)

//ADD CONTAINER DIV TODO
var taskPanelDivTODO = document.createElement('div')
taskPanelDivTODO.className = "container-task"
taskPanelDiv.append(taskPanelDivTODO)

//ADD CONTAINER DIV TODO TITLE
var taskPanelDivTODOTitle = document.createElement('div')
var taskPanelDivTODOTitleH3 = document.createElement('h3')
taskPanelDivTODO.append(taskPanelDivTODOTitle)
taskPanelDivTODO.style.overflowY = "scroll"
taskPanelDivTODOTitle.append(taskPanelDivTODOTitleH3)
taskPanelDivTODOTitle.style.textAlign = "center"
taskPanelDivTODOTitle.className = "container-task-title"
taskPanelDivTODOTitle.style.backgroundColor = "orange"
taskPanelDivTODOTitle.style.borderBottom = "4px solid black"
taskPanelDivTODOTitleH3.innerText = "TODO"
//ADD TASKS DIV
var taskPanelDivTODOTASK = document.createElement('div')
taskPanelDivTODO.append(taskPanelDivTODOTASK)
taskPanelDivTODOTASK.style.height = "100%"

//ADD CONTAINER DIV DOING
var taskPanelDivDOING = document.createElement('div')
taskPanelDivDOING.className = "container-task"
taskPanelDiv.append(taskPanelDivDOING)

//ADD CONTAINER DIV DOING TITLE
var taskPanelDivDOINGTitle = document.createElement('div')
var taskPanelDivDOINGTitleH3 = document.createElement('h3')
taskPanelDivDOING.append(taskPanelDivDOINGTitle)
taskPanelDivDOING.style.overflowY = "scroll"
taskPanelDivDOINGTitle.append(taskPanelDivDOINGTitleH3)
taskPanelDivDOINGTitle.style.textAlign = "center"
taskPanelDivDOINGTitle.className = "container-task-title"
taskPanelDivDOINGTitle.style.backgroundColor = "yellow"
taskPanelDivDOINGTitle.style.borderBottom = "4px solid black"
taskPanelDivDOINGTitleH3.innerText = "DOING"
//ADD TASKS DIV
var taskPanelDivDOINGTASK = document.createElement('div')
taskPanelDivDOING.append(taskPanelDivDOINGTASK)
taskPanelDivDOINGTASK.style.height = "100%"

//ADD CONTAINER DIV FINISH
var taskPanelDivFINISH = document.createElement('div')
taskPanelDivFINISH.className = "container-task"
taskPanelDiv.append(taskPanelDivFINISH)

//ADD CONTAINER DIV FINISH TITLE
var taskPanelDivFINISHTitle = document.createElement('div')
var taskPanelDivFINISHTitleH3 = document.createElement('h3')
taskPanelDivFINISH.append(taskPanelDivFINISHTitle)
taskPanelDivFINISH.style.overflowY = "scroll"
taskPanelDivFINISHTitle.append(taskPanelDivFINISHTitleH3)
taskPanelDivFINISHTitle.style.textAlign = "center"
taskPanelDivFINISHTitle.className = "container-task-title"
taskPanelDivFINISHTitle.style.backgroundColor = "green"
taskPanelDivFINISHTitle.style.borderBottom = "4px solid black"
taskPanelDivFINISHTitleH3.innerText = "DONE"
//ADD TASKS DIV
var taskPanelDivFINISHTASK = document.createElement('div')
taskPanelDivFINISH.append(taskPanelDivFINISHTASK)
taskPanelDivFINISHTASK.style.height = "100%"

//BACKGROUND
taskPanelDivTODOTASK.style.background = "rgb(239, 239, 239)"
taskPanelDivDOINGTASK.style.background = "rgb(239, 239, 239)"
taskPanelDivFINISHTASK.style.background = "rgb(239, 239, 239)"

//OPEN ADD TASK FUNCTION
taskPanelTitel.onclick = function (event) {
    event.preventDefault()
    log('DEBUG', 'open add task menu')

    taskPanel.remove()
    body.append(addTaskMenu)
}


