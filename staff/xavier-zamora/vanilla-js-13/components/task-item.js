
//THE TASK-ITEMS
//taskPanelDivTODOTASK.append(taskItem)

//ARRAYS CONTAINER
var taskItemArrayTodo = []
var taskItemArrayDoing = []
var taskItemArrayDone = []

var taskItemID = 0 //TODO LOOK IF IS USED IN ANOTHER POSITION

//THIS FUNCTION ADD THE TASKS TO THE PANEL
function showItems() {
    //THIS ARE SELECTORS FOR CHANGE DE DB AND THE ARRAYCONTAINER
    var selectorDB = task_TODO
    var pushselectorDB = taskItemArrayTodo

    //TASK_TODO BUCLE
    var i = task_TODO.length
    while (i > 0) {
        i--
        data()
    }

    //TASK_DOING BUCLE
    i = task_DOING.length
    pushselectorDB = taskItemArrayDoing
    selectorDB = task_DOING
    while (i > 0) {
        i--
        data()
    }
    //TASK_DONE BUCLE
    i = task_DONE.length
    pushselectorDB = taskItemArrayDone
    selectorDB = task_DONE
    while (i > 0) {
        i--
        data()
    }

    //PUSH TO CONTAINERS
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

    function data() {//FUNCTION FOR CREATE ITEM

        var taskItem = document.createElement('div')
        taskItem.className = "item justify-content-center"
        taskItem.style.paddingTop = "0.5rem"

        var taskItemText = document.createElement('div')
        taskItemText.draggable = "true"
        taskItemText.style.background = "rgb(255, 255, 255)"
        taskItemText.style.border = "1px solid black"
        taskItemText.style.padding = "0.2rem"

        taskItem.append(taskItemText)

        //PUSH DATA
        taskItemText.innerHTML = '<h5>' + selectorDB[i].bd_task_title + '</h5>'
        pushselectorDB.push(taskItem)
    }
}//|||||||||||||||||||HOW WORKS||||||||||||||||||||
//THE TWO VARS CHANGE DE DATA, NEXT THE BUCLES PUSH THIS DATA IN A DB, NEXT THE BUCLES PUSH ITEMS IN ARRAYS AND THIS ARRAYS PUSH THE ITEMS TO CONTAINER IN THE PANEL.

//THIS FUNCTION ADD NEW ITEM
function addTheNewItem() {
    //SELECTORS
    var pushselectorDB = taskItemArrayTodo
    var selectorDB = task_TODO

    //CONDITIONLALS FOR PUSH
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

    //DATA
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
}//|||||||||||||||||||HOW WORKS||||||||||||||||||||
//SELECTORS SELECT THE ARRAY AND DB, NEXT CONDITIONALS PUSH THE ITEM INTO A CONTAINER OF PANEL USING A DATA PSUH

//TODO CHANGE STATUS
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
//TODO SEPARATE THE DOCUMENT IN TASK-ITEM AND TASK-ITEM LOGIC
