//ADD TASK PANEL
var taskPanel = document.createElement('section')
taskPanel.className = "display-screen-home"

//ADD PANEL TITTLE DIV FOR H3
var taskPanelTittleDiv = document.createElement('div')
taskPanel.append(taskPanelTittleDiv)
taskPanelTittleDiv.style.width = "100%"
taskPanelTittleDiv.style.height = "10%"
taskPanelTittleDiv.className = "justify-content-center"

//ADD H3 TITTLE
var taskPanelTitel = document.createElement('h2')
taskPanelTittleDiv.append(taskPanelTitel)
taskPanelTitel.innerHTML = "ADD TASKS"

//ADD CONTAINER DIV
var taskPanelDiv = document.createElement('div')
taskPanelDiv.className = "containerPanel"
taskPanel.append(taskPanelDiv)

//ADD CONTAINER DIV TODO
var taskPanelDivTODO = document.createElement('div')
taskPanelDivTODO.className = "container-task"
taskPanelDiv.append(taskPanelDivTODO)

//ADD CONTAINER DIV TODO TITTLE
var taskPanelDivTODOTittle = document.createElement('div')
var taskPanelDivTODOTittleH3 = document.createElement('h3')
taskPanelDivTODO.append(taskPanelDivTODOTittle)
taskPanelDivTODOTittle.append(taskPanelDivTODOTittleH3)
taskPanelDivTODOTittle.style.textAlign = "center"
taskPanelDivTODOTittle.className = "container-task-title"
taskPanelDivTODOTittle.style.backgroundColor = "orange"
taskPanelDivTODOTittle.style.borderBottom = "4px solid black"
taskPanelDivTODOTittleH3.innerText = "TODO"
//ADD TASKS DIV
var taskPanelDivTODOTASK = document.createElement('div')
taskPanelDivTODO.append(taskPanelDivTODOTASK)
taskPanelDivTODOTASK.style.height = "100%"

//ADD CONTAINER DIV DOING
var taskPanelDivDOING = document.createElement('div')
taskPanelDivDOING.className = "container-task"
taskPanelDiv.append(taskPanelDivDOING)

//ADD CONTAINER DIV DOING TITTLE
var taskPanelDivDOINGTittle = document.createElement('div')
var taskPanelDivDOINGTittleH3 = document.createElement('h3')
taskPanelDivDOING.append(taskPanelDivDOINGTittle)
taskPanelDivDOINGTittle.append(taskPanelDivDOINGTittleH3)
taskPanelDivDOINGTittle.style.textAlign = "center"
taskPanelDivDOINGTittle.className = "container-task-title"
taskPanelDivDOINGTittle.style.backgroundColor = "yellow"
taskPanelDivDOINGTittle.style.borderBottom = "4px solid black"
taskPanelDivDOINGTittleH3.innerText = "DOING"
//ADD TASKS DIV
var taskPanelDivDOINGTASK = document.createElement('div')
taskPanelDivDOING.append(taskPanelDivDOINGTASK)
taskPanelDivDOINGTASK.style.height = "100%"

//ADD CONTAINER DIV FINISH
var taskPanelDivFINISH = document.createElement('div')
taskPanelDivFINISH.className = "container-task"
taskPanelDiv.append(taskPanelDivFINISH)

//ADD CONTAINER DIV FINISH TITTLE
var taskPanelDivFINISHTittle = document.createElement('div')
var taskPanelDivFINISHTittleH3 = document.createElement('h3')
taskPanelDivFINISH.append(taskPanelDivFINISHTittle)
taskPanelDivFINISHTittle.append(taskPanelDivFINISHTittleH3)
taskPanelDivFINISHTittle.style.textAlign = "center"
taskPanelDivFINISHTittle.className = "container-task-title"
taskPanelDivFINISHTittle.style.backgroundColor = "green"
taskPanelDivFINISHTittle.style.borderBottom = "4px solid black"
taskPanelDivFINISHTittleH3.innerText = "DONE"
//ADD TASKS DIV
var taskPanelDivFINISHTASK = document.createElement('div')
taskPanelDivFINISH.append(taskPanelDivFINISHTASK)
taskPanelDivFINISHTASK.style.height = "100%"

//OPEN ADD TASK FUNCTION
taskPanelTitel.onclick = function (event) {
    event.preventDefault()
    log('DEBUG', 'working')

    taskPanel.remove()
    body.append(addTaskMenu)
}


