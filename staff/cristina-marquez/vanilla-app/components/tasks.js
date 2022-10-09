var tasksComponent = document.createElement('section')
tasksComponent.className = 'container-Flex'

var tasksTitle = document.createElement('h2')
tasksTitle.innerText = 'Tasks'

var tasksContentPanel = document.createElement('div')
tasksContentPanel.className = 'task-container'

var tasksTodoColumn = document.createElement('section')
tasksTodoColumn.innerText = 'TODO'
tasksTodoColumn.className = 'task-container'

var tasksInProgressColumn = document.createElement('section')
tasksInProgressColumn.innerText = 'IN PROGRESS'
tasksInProgressColumn.className = 'task-container'

var tasksCompletedColumn = document.createElement('section')
tasksCompletedColumn.innerText = 'COMPLETED'
tasksCompletedColumn.className = 'task-container'

tasksContentPanel.append(tasksTodoColumn, tasksInProgressColumn, tasksCompletedColumn)

tasksComponent.append(tasksTitle, tasksContentPanel)

function createTaskCard(text) {
    var taskCard = document.createElement('article')
    taskCard.innerText = text
    taskCard.className = 'task-container'

    return taskCard
}

