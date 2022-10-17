function retrieveTasks(emailUser) {
  if (typeof emailUser !== "string") return new Error("email is not a string");
  if (!IS_EMAIL_REGEX.test(emailUser)) return new Error("email is not valid");

  var found = false;

  for (var i = 0; i < users.length && !found; i++) {
    var user = users[i];

    if (user.email === emailUser) found = true;
  }

  if (!found) return new Error("user with email " + emailUser + " mot found");

  var userTasks = [];

  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    if (task.user === emailUser) {
      userTasks.push(task);
    }
  }
  return userTasks;
}
