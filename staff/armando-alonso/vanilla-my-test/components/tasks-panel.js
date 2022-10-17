var tasksPanel = document.createElement("section");
tasksPanel.className = "container container--full-with";

var tasksTitle = document.createElement("h2");
tasksTitle.innerText = "Tasks";

var tasksContentPanel = document.createElement("div");
tasksContentPanel.className = "container container--row container--items-start";

var tasksColumnTodo = document.createElement("section");
tasksColumnTodo.className = "container container--border container--padding-s container--items-start";
tasksColumnTodo.innerText = "ToDo Column";

var tasksColumnDoing = document.createElement("section");
tasksColumnDoing.className =
  "container container--border container--padding-s container--items-start";
tasksColumnDoing.innerText = "Doing Column";

var tasksColumnDone = document.createElement("section");
tasksColumnDone.className =
  "container container--border container--padding-s container--items-start";
tasksColumnDone.innerText = "Done Column";

tasksContentPanel.append(tasksColumnTodo, tasksColumnDoing, tasksColumnDone);

tasksPanel.append(tasksTitle, tasksContentPanel);




function createTaskCard(taskId, text) {
  var taskCard = document.createElement("article");
  taskCard.className = "container container--border container--padding-s container--full-with";

  var taskText = document.createElement('p')
  taskText.innerText = text;
  taskText.contentEditable = true;

  taskText.onkeyup = function () {
    var result = updateTaskText(user.email, taskId, taskText.innerText);

    if (result instanceof Error) {
      alert(result.message);

      return
    }
  }

  var taskDeleteButton = document.createElement('button')
  taskDeleteButton.className = 'material-symbols-outlined'
  taskDeleteButton.innerText = 'delete'

  taskDeleteButton.onclick = function(){
    var result = deleteTask(user.email, taskId)

    if (result instanceof Error) {
        alert(result.message)

        return
    }

    taskCard.remove()
  }

  taskCard.append(taskText, taskDeleteButton)
  
  return taskCard;
}

function clearTasksCards() {
  var cleanTask = tasksContentPanel.querySelectorAll("article");

  for (var i = 0; i < cleanTask.length; i++) {
    var myTaskCard = cleanTask[i];

    myTaskCard.remove();
  }
}

function renderTasksCards() {
  var myTasks = retrieveTasks(user.email);

  for (var i = 0; i < myTasks.length; i++) {
    var myTask = myTasks[i];

    var myTaskCard = createTaskCard(myTask.id, myTask.text);

    if (myTask.status === "todo") tasksColumnTodo.append(myTaskCard);
    else if (myTask.status === "doing") tasksColumnDoing.append(myTaskCard);
    else if (myTask.status === "done") tasksColumnDone.append(myTaskCard);
  }
}
