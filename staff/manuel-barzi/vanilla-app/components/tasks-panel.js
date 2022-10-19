var tasksPanel = document.createElement('section')
tasksPanel.className = 'container container--full-width'

var tasksTitle = document.createElement('h2')
tasksTitle.innerText = 'Tasks'

var tasksContentPanel = document.createElement('div')
tasksContentPanel.className = 'container container--row container--items-start'

var tasksTodoColumn = document.createElement('section')
tasksTodoColumn.innerText = 'TODO'
tasksTodoColumn.className = 'container container--border container--padding-s container--items-start'

var tasksDoingColumn = document.createElement('section')
tasksDoingColumn.innerText = 'DOING'
tasksDoingColumn.className = 'container container--border container--padding-s container--items-start'

var tasksDoneColumn = document.createElement('section')
tasksDoneColumn.innerText = 'DONE'
tasksDoneColumn.className = 'container container--border container--padding-s container--items-start'

tasksContentPanel.append(tasksTodoColumn, tasksDoingColumn, tasksDoneColumn)

tasksPanel.append(tasksTitle, tasksContentPanel)

function createTaskCard(taskId, text) {
    var taskCard = document.createElement('article')
    taskCard.className = 'container container--border container--padding-s container--full-width'

    var taskText = document.createElement('p')
    taskText.innerText = text
    taskText.contentEditable = true

    taskText.onkeyup = function () {
        try {
            updateTaskText(user.email, taskId, taskText.innerText)
        } catch (error) {
            alert(error.message)
        }
    }

    var taskDeleteButton = document.createElement('button')
    taskDeleteButton.className = 'material-symbols-outlined'
    taskDeleteButton.innerText = 'delete'

    taskDeleteButton.onclick = function () {
        try {
            deleteTask(user.email, taskId)

            taskCard.remove()
        } catch (error) {
            alert(error.message)
        }
    }

    taskCard.append(taskText, taskDeleteButton)

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
    try {
        var myTasks = retrieveTasks(user.email)

        for (var i = 0; i < myTasks.length; i++) {
            var myTask = myTasks[i]

            var myTaskCard = createTaskCard(myTask.id, myTask.text)

            if (myTask.status === 'todo')
                tasksTodoColumn.append(myTaskCard)
            else if (myTask.status === 'doing')
                tasksDoingColumn.append(myTaskCard)
            else if (myTask.status === 'done')
                tasksDoneColumn.append(myTaskCard)
        }
    } catch (error) {
        alert(error.message)
    }
}