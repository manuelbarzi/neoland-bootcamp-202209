const tasksPanel = document.createElement('section')
tasksPanel.className = 'flex flex-col items-center'

const tasksTitle = document.createElement('h2')
tasksTitle.innerText = 'Tasks'

const tasksContentPanel = document.createElement('div')
tasksContentPanel.className = 'flex flex-col sm:flex-row gap-4'

const tasksTodoColumn = document.createElement('section')
tasksTodoColumn.innerText = 'TODO'
tasksTodoColumn.className = 'flex flex-col gap-2 border-2 p-2'

const tasksDoingColumn = document.createElement('section')
tasksDoingColumn.innerText = 'DOING'
tasksDoingColumn.className = 'border-2 p-2'

const tasksDoneColumn = document.createElement('section')
tasksDoneColumn.innerText = 'DONE'
tasksDoneColumn.className = 'border-2 p-2'

tasksContentPanel.append(tasksTodoColumn, tasksDoingColumn, tasksDoneColumn)

tasksPanel.append(tasksTitle, tasksContentPanel)

function createTaskCard(taskID, text) {
    const taskCard = document.createElement('article')
    taskCard.className = 'border-2 p-1'
   
    const taskText = document.createElement('p')
    taskText.innerText = text
    taskText.contentEditable = true

    taskText.onkeyup = function() {
        try {
            updateTaskText(user.email, taskID, taskText.innerText)
        } catch (error) {
            alert(error.message)
        }
    }
    
    const taskDeleteButton = docuemnt.createElement('button')
    taskDeleteButton.className = 'material-symbols-outlined'
    taskDeleteButton.innerText = 'delete'

    taskDeleteButton.onclick = function () {
       try {
           deleteTask(user.email, taskID)

           taskCard.remove()
       } catch (error) {
           alert(error.messaje)
        }
    }

    taskCard.append(taskText, taskDeleteButton)

    return taskCard
}

function clearTasksCards() {
    const myTasksCards = tasksPanel.querySelectorAll('article')

    for (let i = 0; i < myTasksCards.length; i++) {
        const myTaskCard = myTasksCards[i]

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