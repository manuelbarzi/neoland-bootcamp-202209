var tasksPanel = documente.createElement('section')
tasksPanel.className = 'container-Flex'

var tasksTitle = document.createElement('h2')
tasksTitle.innerText = 'Tasks'

var tasksContentPanel = document.createElement('div')
tasksContentPanel.className = 'container container--row container--items-start'

var tasksTodoColumn = document.createElement('section')
tasksTodoColumn.innerText = 'TODO'
tasksTodoColumn.className = 'container container--border container--padding-s container--items-start'

var tasksInProgressColumn = document.createElement('section')
tasksInProgressColumn.innerText = 'IN PROGRESS'
tasksInProgressColumn.className = 'container container--border container--padding-s'

var tasksCompletedColumn = document.createElement('section')
tasksCompletedColumn.innerText = 'COMPLETED'
tasksCompletedColumn.className = 'container container--border container--padding-s'

tasksContentPanel.append(tasksTodoColumn, tasksInProgressColumn, tasksCompletedColumn)

tasksPanel.append(tasksTitle, tasksContentPanel)

function createTaskCard(text) {
    var taskCard = document.createElement('article')
    taskCard.innerText = text
    taskCard.className = 'container container--border container--padding-s container--full-width'

    return taskCard
}

