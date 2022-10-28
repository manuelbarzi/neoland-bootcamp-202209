const tasksPanel = document.createElement('section')
tasksPanel.className = ' container--full-width'

const tasksTitle = document.createElement('h2')
tasksTitle.innerText = 'Tasks'
tasksTitle.className = 'container'

const tasksContentPanel = document.createElement('div')
tasksContentPanel.className = 'container container--row container--items-start'

const tasksTodoColumn = document.createElement('section')
tasksTodoColumn.innerText = 'TODO'
tasksTodoColumn.className = 'container--border container--padding-s container--items-start'

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
// function createTaskCard(taskId, text){
// const taskCard = document.createElement('article')
// taskCard.innerText = text
// taskCard.contentEditable = true
// taskCard.onKeyUp = function () {
//   try {
//     updateTaskText(user.email, taskId, taskText.innerText)
//   } catch (error) {
//     alert(error.message)
//   }
//   return taskCard
// }
const doingContenedor = document.createElement('div')

const tasksDoingColumn = document.createElement('section')
tasksDoingColumn.innerText = 'DOING'
tasksDoingColumn.className = 'container--border container--padding-s'

const doneContenedor = document.createElement('div')

const tasksDoneColumn = document.createElement('section')
tasksDoneColumn.innerText = 'DONE'
tasksDoneColumn.className = ' container--border container--padding-s'

//tasksContentPanel.append(tasksTodoColumn, tasksDoingColumn, tasksDoneColumn)

function createTaskCard(taskId, text) {
  const taskCard = document.createElement('article')
  taskCard.className = 'container container--border-i container--padding-s container--full-width'

  const taskText = document.createElement('p')
  taskText.innerText = text
  taskText.contentEditable = true

  taskText.onkeyup = function () {
    try {
      updateTaskText(user.email, taskId, taskText.innerText)
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
//var clearTasksCards = document.createElement
function clearTasksCards() {
  const myTasksCards = tasksPanel.querySelectorAll('article')

  for (let i = 0; i < myTasksCards.length; i++) {
    const myTaskCard = myTasksCards[i]

    myTaskCard.remove()
  }
}
//tasksTodoColumn.append(taskDeleteButton)

function renderTasksCards() {
  //var myTasks
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


const buttonTasks = document.createElement('button')
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
const addTask = document.createElement('div')
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

// setDate()
addTask.append(buttonTasks)
todoContenedor.append(tasksTodoColumn, tasksTodoForm)
doingContenedor.append(tasksDoingColumn)
doneContenedor.append(tasksDoneColumn)
tasksPanel.append(tasksTitle, tasksContentPanel, addTask)
tasksContentPanel.append(tasksTodoColumn, tasksDoingColumn, tasksDoneColumn)

//tasksPanel.append(tasksTitle, tasksContentPanel, addTask)