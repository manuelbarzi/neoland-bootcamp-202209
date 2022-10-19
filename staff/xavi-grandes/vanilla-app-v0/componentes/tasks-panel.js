var tasksPanel = document.createElement('main')
    tasksPanel.className='tasks-menu'

var tasksTitle = document.createElement('h1')
    tasksTitle.className='tasks-title'
    tasksTitle.innerText='Manage your tasks'

var tasksContentPanel = document.createElement('div')
    tasksContentPanel.className='tasks-panel'

var tasksTodoColumn = document.createElement('section')
    tasksTodoColumn.className='todo-column'
    tasksTodoColumn.innerText='TO DO'

var taskTodo = document.createElement('div')
    taskTodo.className='task-item'
    taskTodo.innerText = 'hacer la colada'

    tasksTodoColumn.append(taskTodo)

var tasksDoingColumn = document.createElement('section')
    tasksDoingColumn.className='doing-column'
    tasksDoingColumn.innerText='DOING'

var tasksDoneColumn = document.createElement('section')
    tasksDoneColumn.className='done-column'
    tasksDoneColumn.innerText='DONE'

tasksContentPanel.append(tasksTodoColumn, tasksDoingColumn, tasksDoneColumn)
    
tasksPanel.append(tasksTitle, tasksContentPanel)

function createTaskCard(taskId, text) {
    var taskCard = document.createElement('article')
    taskCard.innerText = text
    taskCard.className = 'fff'


    var taskText = document.createElement('p')
        taskText.innerText = Text
        taskCard.contentEditable = true

    taskText.onkeyup = function() {
        var result = updateTaskText (user,email, taskId, taskText.innerText)

        if (result instanceof Error) {
            alert(result.message)

            return
        }
    }

    var taskDeleteButton = document.createElement('button')
    taskDeleteButton.className = 'material-symbols-outlined'
    taskDeleteButton = 'delete'

    taskDeleteButton.onclick = function() {
        var result = deleteTask(user.email, taskId)

        if (result instanceof Error){
            alert (result.message)

            return
        }
        taskCard.remove()
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