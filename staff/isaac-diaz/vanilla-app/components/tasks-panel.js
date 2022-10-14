var tasksPanel = document.createElement('section')
tasksPanel.className = 'container container--full-width'

var tasksTitle = document.createElement('h2')
tasksTitle.innerText =  'Tasks'

tasksContentPanel = document.createElement ('div')
tasksContentPanel.className = 'container container--row container--items-start'

var tasksTodoColumn = document.createElement ('section')
tasksTodoColumn.innerText = 'TODO'
tasksTodoColumn.className = 'container container--border container--padding-s container--items-start border'

var tasksDoingColumn = document.createElement('section')
tasksDoingColumn.innerText = 'DOING'
tasksDoingColumn.className = 'container container--border container--padding-s container--items-start border'

var tasksDoneColumn = document.createElement('section')
tasksDoneColumn.innerText = 'DONE'
tasksDoneColumn.className = 'container container--border container--padding-s container--items-start border'

tasksContentPanel.append(tasksTodoColumn, tasksDoingColumn, tasksDoneColumn)

tasksPanel.append(tasksTitle, tasksContentPanel)

//Funcion para crear targetas

function createTaskCard(taskId, text) {
    var taskCard = document.createElement('article')
    taskCard.innerText = text
    taskCard.className = 'container container--border container--full-width container--padding-s border'

    var taskText = document.createElement('p')
    taskText.innerText = text
    taskCard.contentEditable = true

    taskText.onkeyup = function() {
        var result = updateTaskText(user.email, task.id, taskCard.innerText)

        if(result instanceof Error) {
            alert(result.message)

            return
        }
    }
    
    var taskDeleteButton = document.createElement('button')
    taskDeleteButton.className = 'material-symbols-outlined'
    taskDeleteButton.innerText = 'delete'

    taskDeleteButton.onclick = function() {
        var result = deleteTask(user.email, taskId)

        if(result instanceof Error) {
            alert(result.message)
        }
        taskCard.remove()
    }
    taskCard.append(taskText, taskDeleteButton)

    return taskCard
}

function clearTasksCards(){
    var myTasksCards =  tasksPanel.querySelectorAll('article')

    for(var i = 0; i < myTasksCards.length; i++) {
        var myTaskCard = myTasksCards[i]

        myTaskCard.remove()        

    }
}

function renderTasksCards() {
    var myTasks = retrieveTasks(user.email)

    for(var i = 0; i < myTasks.length; i++) {
        myTask = myTasks[i]

        var myTaskCard = createTaskCard(myTask.id, myTask.text)

        if(myTask.status === 'todo')
        tasksTodoColumn.append(myTaskCard)
        else if(myTask.status === 'doing')
        tasksDoingColumn.append(myTaskCard)
        else if(myTask.status === 'done')
        tasksDoneColumn.append(myTaskCard)

    }
}
