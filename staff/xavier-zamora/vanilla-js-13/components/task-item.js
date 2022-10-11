
//THE TASK-ITEMS
//taskPanelDivTODOTASK.append(taskItem)

//ARRAYS CONTAINER
var taskId = taskDb.length - 1
var taskItemArrayTodo = []
var taskItemArrayDoing = []
var taskItemArrayDone = []

var articleClick

//THIS FUNCTION ADD THE TASKS TO THE PANEL
function showItems() {
    //THIS ARE SELECTORS FOR CHANGE DE DB AND THE ARRAYCONTAINER
    var statusItem

    //TASKDB BUCLE
    var i = taskDb.length - 1
    for(i; i >= 0; i--) {
        createTaskItem()
    }

    //PUSH TO CONTAINERS
    for (i = taskItemArrayTodo.length; i > 0; i--) {
        taskPanelDivTODOTASK.append(taskItemArrayTodo[i-1])
    }

    for (i = taskItemArrayDoing.length; i > 0; i--) {
        taskPanelDivDOINGTASK.append(taskItemArrayDoing[i-1])
    }

    for (i = taskItemArrayDone.length; i > 0; i--) {
        taskPanelDivFINISHTASK.append(taskItemArrayDone[i-1])
    }

    function createTaskItem() {//FUNCTION FOR CREATE ITEM

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
        taskId--
    }
    
}//|||||||||||||||||||HOW WORKS||||||||||||||||||||
//THE TWO VARS CHANGE DE createNewUser, NEXT THE BUCLES PUSH THIS createNewUser IN A DB, NEXT THE BUCLES PUSH ITEMS IN ARRAYS AND THIS ARRAYS PUSH THE ITEMS TO CONTAINER IN THE PANEL.

//TODO CHANGE STATUS
/*taskPanelDivTODOTASK.addEventListener("dragover", (event) => {
    event.preventDefault()
});
taskPanelDivTODOTASK.addEventListener("drop", (event) => {
    log('debug', 'drop')
    task[0].bd_task_status = "TODO"
    taskItem.remove()
});
taskPanelDivDOINGTASK.addEventListener("dragover", (event) => {
    event.preventDefault()

});
taskPanelDivDOINGTASK.addEventListener("drop", (event) => {
    log('debug', 'drop')
    task[0].bd_task_status = "DOING"
    taskItem.remove()
});
taskPanelDivFINISHTASK.addEventListener("dragover", (event) => {
    event.preventDefault()
});
taskPanelDivFINISHTASK.addEventListener("drop", (event) => {
    log('debug', 'drop')
    task[0].bd_task_status = "DONE"
    taskItem.remove()
});*/
//TODO SEPARATE THE DOCUMENT IN TASK-ITEM AND TASK-ITEM LOGIC
