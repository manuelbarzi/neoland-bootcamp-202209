//TODO:columns + style
//TODO:add logic
var tasksComponent = document.createElement('section')


var tasksTitle = document.createElement('h2')
tasksTitle.innerText = 'Tasks'

var tasksContentPanel = document.createElement('div')
tasksContentPanel.className = 'task-container'

var tasksTodoColumn = document.createElement('section')
tasksTodoColumn.className = 'task-column-group'

var taskTodoHeader = document.createElement('div')
taskTodoHeader.innerText = 'TODO'
taskTodoHeader.className = 'task-column-header'
tasksTodoColumn.append(taskTodoHeader)

var tasksInProgressColumn = document.createElement('section')
tasksInProgressColumn.className = 'task-column-group'

var taskInProgressHeader = document.createElement('div')
taskInProgressHeader.innerText = 'IN PROGRESS'
taskInProgressHeader.className = 'task-column-header'
tasksInProgressColumn.append(taskInProgressHeader)

var tasksCompletedColumn = document.createElement('section')
tasksCompletedColumn.className = 'task-column-group'

var taskCompletedHeader = document.createElement('div')
taskCompletedHeader.innerText = 'COMPLETED'
taskCompletedHeader.className = 'task-column-header'
tasksCompletedColumn.append(taskCompletedHeader)

tasksContentPanel.append(tasksTodoColumn, tasksInProgressColumn, tasksCompletedColumn)

tasksComponent.append(tasksTitle, tasksContentPanel)




function createTaskCard(text) {
    var taskCard = document.createElement('article')
    taskCard.innerText = text
    taskCard.className = 'task-card'
    taskCard.contentEditable = true

    //TODO:onkeyup update task

    return taskCard
}


function renderTasks() {
    var retrievedUserTasks = retrieveTasks(currentUser.email)

    for (let i = 0; i < retrievedUserTasks.length; i++) {
        const element = retrievedUserTasks[i];

        var taskText = element.text
        var taskStatus = element.status

        var task = createTaskCard(taskText)

        if (taskStatus === 'TODO') {
            tasksTodoColumn.append(task)
        }
        if (taskStatus === 'IN PROGRESS') {
            tasksInProgressColumn.append(task)
        }
        if (taskStatus === 'COMPLETED') {
            tasksCompletedColumn.append(task)
        }
    }

}

function clearTasksCards() {
    var myTasksCards = tasksComponent.querySelectorAll('article')

    for (var i = 0; i < myTasksCards.length; i++) {
        var myTaskCard = myTasksCards[i]

        myTaskCard.remove()
    }
}