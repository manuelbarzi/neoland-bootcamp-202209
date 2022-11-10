
//THE TASK-ITEMS
//taskPanelDivTODOTASK.append(taskItem)
var taskItemArrayTodo = []
var taskItemArrayDoing = []
var taskItemArrayDone = []

var taskItemID = 0

function showItems() {
    var selectorDB = task_TODO
    var pushselectorDB = taskItemArrayTodo

    function data() {

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

//THIS FUNCTION ADD NEW ITEM
function addTheNewItem() {
    var pushselectorDB = taskItemArrayTodo
    var selectorDB = task_TODO

    if (task_TODO.length > taskItemArrayTodo.length) {
        pushselectorDB = taskItemArrayTodo
        selectorDB = task_TODO
        var i = task_TODO.length - 1
        data()
        taskPanelDivTODOTASK.append(taskItemArrayTodo[i])
    }
    if (task_DOING.length > taskItemArrayDoing.length) {
        pushselectorDB = taskItemArrayDoing
        selectorDB = task_DOING
        var i = task_DOING.length - 1
        data()
        taskPanelDivDOINGTASK.append(taskItemArrayDoing[i])
    }
    if (task_DONE.length > taskItemArrayDone.length) {
        pushselectorDB = taskItemArrayDone
        selectorDB = task_DONE
        var i = task_DONE.length - 1
        data()
        taskPanelDivFINISHTASK.append(taskItemArrayDone[i])
    }

    function data() {

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

