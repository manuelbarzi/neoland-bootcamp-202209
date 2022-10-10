var newTaskPanel = document.createElement("section");
newTaskPanel.className = "container";

var newTaskButton = document.createElement("button");
newTaskButton.innerText = "+";

newTaskButton.onclick = function () {
  newTaskPanel.append(newTaskForm);
};

newTaskPanel.append(newTaskButton);

newTaskForm = document.createElement("form");
newTaskForm.className = "container";

newTaskForm.onsubmit = function (event) {
  event.preventDefault();

  var text = newTaskTextarea.value;

  var result = createTask(user.email, text);

  // Create the task from textarea value
};

newTaskTextarea = document.createElement("textarea");

newTaskSaveButton = document.createElement("button");
newTaskSaveButton.innerText = "Save";

newTaskForm.append(newTaskTextarea, newTaskSaveButton);
