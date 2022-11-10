//ADD TASK PANEL
var taskPanel = document.createElement('section')
taskPanel.className = "flex display-screen-home"

//ASS PANEL TITTLE DIV FOR H3
var taskPanelTittleDiv = document.createElement('div')
taskPanel.append(taskPanelTittleDiv)
taskPanelTittleDiv.style.width = "100%"
taskPanelTittleDiv.style.height = "10%"
taskPanelTittleDiv.className = "justify-content-center"

//ADD H3 TITTLE
var taskPanelTitel = document.createElement('h3')
taskPanelTittleDiv.append(taskPanelTitel)
taskPanelTitel.innerHTML = "TASKS"


