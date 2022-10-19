var tasksPanel = document.createElement('section')
tasksPanel.className = ' container--full-width'

var tasksTitle = document.createElement('h2')
tasksTitle.innerText = 'Tasks'
tasksTitle.className = 'container'

var tasksContentPanel = document.createElement('div')
tasksContentPanel.className = 'container container--row container--items-start'

var tasksTodoColumn = document.createElement('section')
tasksTodoColumn.innerText = 'TODO'
tasksTodoColumn.className = 'container--border container--padding-s container--items-start'

var tasksDoingColumn = document.createElement('section')
tasksDoingColumn.innerText = 'DOING'
tasksDoingColumn.className = 'container--border container--padding-s'

var tasksDoneColumn = document.createElement('section')
tasksDoneColumn.innerText = 'DONE'
tasksDoneColumn.className = ' container--border container--padding-s'

tasksContentPanel.append(tasksTodoColumn, tasksDoingColumn, tasksDoneColumn)

function createTaskCard(taskId, text) {
  var taskCard = document.createElement('article')
  //taskCard.innerText = text
  taskCard.className = 'container container--border-i container--padding-s container--full-width'

  var taskText = document.createElement('p')
  taskText.innerText = text
  taskCard.contentEditable = true

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
 //var myTasks
   try {
   myTasks = retrieveTasks(user.email)

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


var buttonTasks = document.createElement('button')
buttonTasks.className = 'button-tasks  container--padding-s container--full-width'
buttonTasks.innerText = '+ Add task'

buttonTasks.onclick = function () {
  
  try {
    createTask(user.email)
    
    clearTasksCards()
    
    renderTasksCards()
  } catch (error) {
    
    alert(error.message)
    
  }
}
var addTask = document.createElement('div')
addTask.className = 'container'
addTask.click = function () {
  
  try {
    createTask(user.email)

    clearTasksCards()

    renderTasksCards()
  } catch (error) {
   
    alert(error.message)
  }
}

addTask.append(buttonTasks)
tasksPanel.append(tasksTitle, tasksContentPanel, addTask)
