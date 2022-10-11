//THIS FUNCTION ADD NEW ITEM
function addTheNewItem() {
    var statusItem = taskDb[taskDb.length-1].status
    //SELECTORS

    //CONDITIONLALS FOR PUSH
    if (statusItem === "TODO") {
        var i = taskDb.length - 1
        createNewTask()
        taskPanelDivTODOTASK.append(taskItemArrayTodo[taskItemArrayTodo.length - 1])
    }
    if (statusItem === "DOING") {
        var i = taskDb.length - 1
        createNewTask()
        taskPanelDivDOINGTASK.append(taskItemArrayDoing[taskItemArrayDoing.length - 1])
    }
    if (statusItem === "DONE") {
        var i = taskDb.length - 1
        createNewTask()
        taskPanelDivFINISHTASK.append(taskItemArrayDone[taskItemArrayDone.length - 1])
    }
    //createNewTask
    function createNewTask() {
        taskId = taskDb.length - 1

        var taskItem = document.createElement('article')
        taskItem.className = "item justify-content-center article"
        taskItem.style.paddingTop = "0.5rem"
        
        var taskItemText = document.createElement('div')
        taskItemText.draggable = "true"
        taskItemText.style.background = "rgb(255, 255, 255)"
        taskItemText.style.border = "1px solid black"
        taskItemText.style.padding = "0.2rem"
        taskItemText.id = taskId

        taskItem.append(taskItemText)

        taskItemText.innerHTML = "<a onclick='clickOnTask("+ taskId +")'><h5>" + taskDb[i].title + '</h5></a>'
        statusItem = taskDb[i].status

        if(statusItem === "TODO"){
            taskItemArrayTodo.push(taskItem)
        }
        if(statusItem === "DOING"){
            taskItemArrayDoing.push(taskItem)
        }
        if(statusItem === "DONE"){
            taskItemArrayDone.push(taskItem)
        }
        taskId++
    }
}//|||||||||||||||||||HOW WORKS||||||||||||||||||||
//SELECTORS SELECT THE ARRAY AND DB, NEXT CONDITIONALS PUSH THE ITEM INTO A CONTAINER OF PANEL USING A createNewTask PSUH