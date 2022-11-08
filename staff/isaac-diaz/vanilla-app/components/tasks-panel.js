const tasksPanel = document.createElement('section')
tasksPanel.className = 'container container--full-width'

const tasksTitle = document.createElement('h2')
tasksTitle.innerText = 'Tasks'

tasksContentPanel = document.createElement('div')
tasksContentPanel.className = 'container container--row container--items-start'

const tasksTodoColumn = document.createElement('section')
tasksTodoColumn.innerText = 'TODO'
tasksTodoColumn.className = 'container container--border container--padding-s container--items-start border'

const tasksDoingColumn = document.createElement('section')
tasksDoingColumn.innerText = 'DOING'
tasksDoingColumn.className = 'container container--border container--padding-s container--items-start border'

const tasksDoneColumn = document.createElement('section')
tasksDoneColumn.innerText = 'DONE'
tasksDoneColumn.className = 'container container--border container--padding-s container--items-start border'

tasksContentPanel.append(tasksTodoColumn, tasksDoingColumn, tasksDoneColumn)

tasksPanel.append(tasksTitle, tasksContentPanel)

//Funcion para crear targetas

function createTaskCard(taskId, text) {
    const taskCard = document.createElement('article')
    taskCard.innerText = text
    taskCard.className = 'container container--border container--full-width container--padding-s border'

    const taskText = document.createElement('p')
    taskText.innerText = text
    taskCard.contentEditable = true

    taskText.onkeyup = function () {
        try {
            updateTaskText(user.email, task.id, taskCard.innerText)
        } catch (error) {
            alert(error.message)
        }
    }

    const taskDeleteButton = document.createElement('button')
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
    const myTasksCards = tasksPanel.querySelectorAll('article')

    for (let i = 0; i < myTasksCards.length; i++) {
        var myTaskCard = myTasksCards[i]

        myTaskCard.remove()

    }
}

function renderTasksCards() {
    try {
        const myTasks = retrieveTasks(user.email)

        for (let i = 0; i < myTasks.length; i++) {
            const myTask = myTasks[i]

            const myTaskCard = createTaskCard(myTask.id, myTask.text)

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

