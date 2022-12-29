var tasksPanel = document.createElement('section')
tasksPanel.className = 'flex flex-col items-center gap-4'

var tasksTitle = document.createElement('h2')
tasksTitle.innerText = 'Tasks'
tasksTitle.className = 'text-xl font-extrabold italic'

var tasksContentPanel = document.createElement('div')
tasksContentPanel.className = 'flex flex-col sm:flex-row gap-4'

var tasksTodoColumn = document.createElement('section')
tasksTodoColumn.innerText = 'TODO'
tasksTodoColumn.className = 'flex flex-col rounded-lg order-inherit gap-2 border-4 p-2 w-44'

const todoContenedor = document.createElement('div')
  

const tasksTodoForm = document.createElement('form')
tasksTodoForm.className = 'container-flex-tasks-button container-color'
tasksTodoForm.onsubmit = function (event) {
  event.preventDefault()

  const text = ''

  try {
    createTask(user.email, text)

    clearTaskCard()
    renderTasksCards()
  }
  catch (error) {
    alert(error.message)
  }
}

const doingContenedor = document.createElement('div')

var tasksDoingColumn = document.createElement('section')
tasksDoingColumn.innerText = 'DOING'
tasksDoingColumn.className = 'border-4 rounded-lg order-inherit p-2 gap-2 w-44'

const doneContenedor = document.createElement('div')

var tasksDoneColumn = document.createElement('section')
tasksDoneColumn.innerText = 'DONE'
tasksDoneColumn.className = 'border-4 rounded-lg order-inherit p-2 gap-2 w-44'

//tasksContentPanel.append(tasksTodoColumn, tasksDoingColumn, tasksDoneColumn)

function createTaskCard(taskId, text) {
  var taskCard = document.createElement('article')
  taskCard.className = 'border-2 p-1 rounded-lg order-inherit'

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


var buttonTasks = document.createElement('button')
//buttonTasks.className = 'text-sm  italic'
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
addTask.className = 'flex flex-col items-center text-white my-2 border-1 p-2 mx-10 font-semibold italic rounded-full bg-indigo-600 rounded-x1 shadow-2xl shadow-gray-900'
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
todoContenedor.append(tasksTodoColumn, tasksTodoForm)
doingContenedor.append(tasksDoingColumn)
doneContenedor.append(tasksDoneColumn)
tasksPanel.append(tasksTitle, tasksContentPanel, addTask)
tasksContentPanel.append(tasksTodoColumn, tasksDoingColumn, tasksDoneColumn)
//setDate();