function deleteTask(userId, taskId) {
  var found = false;

  for (var i = 0; i < users.length && !found; i++) {
    var user = users[i];

    if (user.email === userEmail) found = true;
  }

  if (!found) return new Error("user with email " + userEmail + " not found");

  var foundTask;

  for (var i = 0; i < tasks.length && !foundTask; i++) {
    var task = tasks[i];

    if (task.id === taskId) {
      foundTask = task;
    }
  }

  if (!foundTask) return new Error("task with id " + taskId + " not found");

  if (foundTask.user !== userEmail)
    return new Error(
      "task with id " +
        taskId +
        " does not belong to user with email " +
        userEmail
    );

  foundTask.text = text;

  return null;
}
