const tasksPanel = document.createElement('main');
tasksPanel.className = 'tasks-menu';

const tasksTitle = document.createElement('h1');
tasksTitle.className = 'tasks-title';
tasksTitle.innerText = 'Manage your tasks';

const tasksContentPanel = document.createElement('div');
tasksContentPanel.className = 'tasks-panel';

const tasksTodoColumn = document.createElement('section');
tasksTodoColumn.innerText = 'TODO';
tasksTodoColumn.className = 'todo-column';

const tasksDoingColumn = document.createElement('section');
tasksDoingColumn.innerText = 'DOING';
tasksDoingColumn.className ='doing-column';

const tasksDoneColumn = document.createElement('section');
tasksDoneColumn.innerText = 'DONE';
tasksDoneColumn.className ='done-column';

tasksContentPanel.append(tasksTodoColumn, tasksDoingColumn, tasksDoneColumn);

tasksPanel.append(tasksTitle, tasksContentPanel);

function createTaskCard(taskId, text) {
  const taskCard = document.createElement('article');
  taskCard.className ='task-item ';

  const taskText = document.createElement('p');
  taskText.innerText = text;
  taskText.contentEditable = true;

  taskText.onkeyup = function () {
    try {
      updateTaskText(user.email, taskId, taskText.innerText);
    } catch (error) {
      alert(error.message);
    }
  };

  const taskDeleteButton = document.createElement('button');
  taskDeleteButton.className = 'material-symbols-outlined';
  taskDeleteButton.innerText = 'delete';

  taskDeleteButton.onclick = function () {
    try {
      deleteTask(user.email, taskId);

      taskCard.remove();
    } catch (error) {
      alert(error.message);
    }
  };

  taskCard.append(taskText, taskDeleteButton);

  return taskCard;
}

function clearTasksCards() {
  const myTasksCards = tasksPanel.querySelectorAll('article');

  for (let i = 0; i < myTasksCards.length; i++) {
    const myTaskCard = myTasksCards[i];

    myTaskCard.remove();
  }
}

function renderTasksCards() {
  try {
    const myTasks = retrieveTasks(user.email);

    for (let i = 0; i < myTasks.length; i++) {
      const myTask = myTasks[i];

      const myTaskCard = createTaskCard(myTask.id, myTask.text);

      if (myTask.status === 'todo') tasksTodoColumn.append(myTaskCard);
      else if (myTask.status === 'doing') tasksDoingColumn.append(myTaskCard);
      else if (myTask.status === 'done') tasksDoneColumn.append(myTaskCard);
    }
  } catch (error) {
    alert(error.message);
  }
}
