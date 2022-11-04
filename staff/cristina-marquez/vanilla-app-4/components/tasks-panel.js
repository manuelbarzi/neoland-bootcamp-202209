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




function createTaskCardElement(text, userEmail, id) {
    var taskCardContainer = document.createElement('div')
    taskCardContainer.className = 'task-component'

    var taskCardArticle = document.createElement('article')
    taskCardArticle.innerText = text
    taskCardArticle.className = 'task-card'
    taskCardArticle.contentEditable = true

    var taskCardDeleteIcon = document.createElement('span')
    taskCardDeleteIcon.innerText = 'delete'
    taskCardDeleteIcon.className = 'material-symbols-outlined task-component delete-icon'

    taskCardContainer.append(taskCardArticle, taskCardDeleteIcon)

    taskCardArticle.onkeyup = function () {
        var error = updateTaskText(userEmail, id, taskCardArticle.innerText)

        if (error) {
            log('ERROR', error)
        }
    }

    taskCardDeleteIcon.onclick = function () {
        deleteTaskCard(id)
        clearTasksCards()
        renderTasks()

    }
    return taskCardContainer
}



function renderTasks() {
    var retrievedUserTasks = retrieveTasks(currentUser.email)

    for (let i = 0; i < retrievedUserTasks.length; i++) {
        const dbTask = retrievedUserTasks[i];

        var taskText = dbTask.text
        var taskStatus = dbTask.status
        var taskId = dbTask.id

        var task = createTaskCardElement(taskText, currentUser.email, taskId)

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
    var myTasksCards = tasksComponent.querySelectorAll('.task-component')

    for (var i = 0; i < myTasksCards.length; i++) {
        var myTaskCard = myTasksCards[i]

        myTaskCard.remove()
    }
}