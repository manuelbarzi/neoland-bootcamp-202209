const tasksPanel = document.createElement("section");
tasksPanel.className = "container container--full-with";

const tasksTitle = document.createElement("h2");
tasksTitle.innerText = "Tasks";

const tasksContentPanel = document.createElement("div");
tasksContentPanel.className = "container container--row container--items-start";

const tasksColumnTodo = document.createElement("section");
tasksColumnTodo.className = "container container--border container--padding-s container--items-start";
tasksColumnTodo.innerText = "ToDo Column";

const tasksColumnDoing = document.createElement("section");
tasksColumnDoing.className =
  "container container--border container--padding-s container--items-start";
tasksColumnDoing.innerText = "Doing Column";

const tasksColumnDone = document.createElement("section");
tasksColumnDone.className =
  "container container--border container--padding-s container--items-start";
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
