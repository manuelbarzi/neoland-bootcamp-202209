const tasksPanel = document.createElement("section");
tasksPanel.className = "flex flex-col items-center";

const tasksTitle = document.createElement("h2");
tasksTitle.innerText = "Tasks";
tasksTitle.className = 'p-4'

const tasksContentPanel = document.createElement("div");
tasksContentPanel.className = "flex flex-col sm:flex-row gap-40";

const tasksColumnTodo = document.createElement("section");
tasksColumnTodo.className = "flex";
tasksColumnTodo.innerText = "ToDo Column";

const tasksColumnDoing = document.createElement("section");
tasksColumnDoing.className = "";
tasksColumnDoing.innerText = "Doing Column";

const tasksColumnDone = document.createElement("section");
tasksColumnDone.className = "";
tasksColumnDone.innerText = "Done Column";

tasksContentPanel.append(tasksColumnTodo, tasksColumnDoing, tasksColumnDone);

tasksPanel.append(tasksTitle, tasksContentPanel);




function createTaskCard(taskId, text) {
  const taskCard = document.createElement("article");
  taskCard.className = "container container--border container--padding-s container--full-with";

  const taskText = document.createElement('p')
  taskText.innerText = text;
  taskText.contentEditable = true;

  taskText.onkeyup = function () {
  
    try {
      updateTaskText(user.email, taskId, taskText.innerText);
    } catch (error) {
      alert(error.message)
    }

  }

  const taskDeleteButton = document.createElement('button')
  taskDeleteButton.className = 'material-symbols-outlined'
  taskDeleteButton.innerText = 'delete'

  taskDeleteButton.onclick = function(){

    try {
      deleteTask(user.email, taskId)

      taskCard.remove()

    } catch (error) {
        alert(error.message)
    }
  }

  taskCard.append(taskText, taskDeleteButton)
  
  return taskCard;
}

function clearTasksCards() {
  const cleanTask = tasksContentPanel.querySelectorAll("article");

  for (let i = 0; i < cleanTask.length; i++) {
    const myTaskCard = cleanTask[i];

    myTaskCard.remove();
  }
}

function renderTasksCards() {
  const myTasks = retrieveTasks(user.email);

  for (let i = 0; i < myTasks.length; i++) {
    const myTask = myTasks[i];

    const myTaskCard = createTaskCard(myTask.id, myTask.text);

    if (myTask.status === "todo") tasksColumnTodo.append(myTaskCard);
    else if (myTask.status === "doing") tasksColumnDoing.append(myTaskCard);
    else if (myTask.status === "done") tasksColumnDone.append(myTaskCard);
  }
}
