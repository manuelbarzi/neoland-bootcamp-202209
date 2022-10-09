
//THE TASK-ITEMS
//taskPanelDivTODOTASK.append(taskItem)
var taskItemArrayTodo = []
var taskItemArrayDoing = []
var taskItemArrayDone = []

var taskItemID = 0

function showItems() {
    var selectorDB = task_TODO
    var pushselectorDB = taskItemArrayTodo

    function data(){
        
        var taskItem = document.createElement('div')
        taskItem.className = "item justify-content-center"
        taskItem.style.paddingTop = "0.5rem"

        var taskItemText = document.createElement('div')
        taskItemText.draggable = "true"
        taskItemText.style.background = "rgb(255, 255, 255)"
        taskItemText.style.border = "1px solid black"
        taskItemText.style.padding = "0.2rem"

        taskItem.append(taskItemText)

        taskItemText.innerHTML = '<h5>' + selectorDB[i].bd_task_title + '</h5>'
        pushselectorDB.push(taskItem)
    }
    var i = task_TODO.length
    while (i > 0) {
        i--
       data()
    }
    
    i = task_DOING.length
    pushselectorDB = taskItemArrayDoing
    selectorDB = task_DOING
    while (i > 0) {
        i--
        data()
    }
    i = task_DONE.length
    pushselectorDB = taskItemArrayDone
    selectorDB = task_DONE
    while (i > 0) {
        i--
        data()
    }

    var j = taskItemArrayTodo.length
    while (j > 0) {
        j--
        taskPanelDivTODOTASK.append(taskItemArrayTodo[j])
    }
    
    j = taskItemArrayDoing.length
    while (j > 0) {
        j--
        taskPanelDivDOINGTASK.append(taskItemArrayDoing[j])
    }
    
    j = taskItemArrayDone.length
    while (j > 0) {
        j--
        taskPanelDivFINISHTASK.append(taskItemArrayDone[j])
    }
}

 //THIS PART DELETE TASK-ITEMS FOR RESET
 function deleteItems(){
        var deleteA = taskItemArrayTodo.length
        var deleteB = taskItemArrayDoing.length
        var deleteC = taskItemArrayDone.length
        var deleteHigh = deleteA
        if(deleteA >= deleteB && deleteA >= deleteC) deleteHigh = deleteA
        if(deleteB >= deleteA && deleteB >= deleteC) deleteHigh = deleteB
        if(deleteC >= deleteA && deleteC >= deleteB) deleteHigh = deleteC

        while (deleteHigh > 0){
            deleteHigh--
            taskItemArrayTodo.pop()
            taskItemArrayDoing.pop()
            taskItemArrayTodo.pop()
        }
        }


//CHANGE STATUS
taskPanelDivTODOTASK.addEventListener("dragover", (event) => {
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
});

