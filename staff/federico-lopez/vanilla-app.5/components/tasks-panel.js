var tasksPanel = document.createElement('section')
tasksPanel.className = 'container container--full-width'

var tasksTitle = document.createElement('h2')
tasksTitle.innerText = 'Tasks'

var tasksContentPanel = document.createElement('div')
tasksContentPanel.className = 'container container--row container--items-start'

var tasksTodoColumn = document.createElement('section')
tasksTodoColumn.innerText = 'TODO'
tasksTodoColumn.className = 'container container--border container--padding-s container--items-start'

var taskCard = createTaskCard('buy milk')
tasksTodoColumn.append(taskCard)

var taskCard2 = createTaskCard('buy eggs')
tasksTodoColumn.append(taskCard2)

var taskCard3 = createTaskCard('buy tomatoes and bananas')
tasksTodoColumn.append(taskCard3)

var tasksDoingColumn = document.createElement('section')
tasksDoingColumn.innerText = 'DOING'
tasksDoingColumn.className = 'container container--border container--padding-s container--items-start'

var taskCard4 = createTaskCard('buy shoes')
tasksDoingColumn.append(taskCard4)

var taskCard5 = createTaskCard('buy socks')
tasksDoingColumn.append(taskCard5)

var tasksDoneColumn = document.createElement('section')
tasksDoneColumn.innerText = 'DONE'
tasksDoneColumn.className = 'container container--border container--padding-s container--items-start'

var taskCard6 = createTaskCard('buy gums')
tasksDoneColumn.append(taskCard6)

var taskCard7 = createTaskCard('buy t-shirt')
tasksDoneColumn.append(taskCard7)

tasksContentPanel.append(tasksTodoColumn, tasksDoingColumn, tasksDoneColumn)

tasksPanel.append(tasksTitle, tasksContentPanel)

function createTaskCard(text) {
    var taskCard = document.createElement('article')
    taskCard.innerText = text
    taskCard.className = 'container container--border container--padding-s container--full-width'
    taskCard.contentEditable = true

    return taskCard
}

function clearTasksCards() {
    var myTasksCards = tasksPanel.querySelectorAll('article')

    for (var i = 0; i < myTasksCards.length; i++) {
        var myTaskCard = myTasksCards[i]

        myTaskCard.remove()
    }
}

function renderTasksCards() {
    var myTasks = retrieveTasks(user.email)

    for (var i = 0; i < myTasks.length; i++) {
        var myTask = myTasks[i]

        var myTaskCard = createTaskCard(myTask.text)

        if (myTask.status === 'todo')
            tasksTodoColumn.append(myTaskCard)
        else if (myTask.status === 'doing')
            tasksDoingColumn.append(myTaskCard)
        else if (myTask.status === 'done')
            tasksDoneColumn.append(myTaskCard)
    }
}