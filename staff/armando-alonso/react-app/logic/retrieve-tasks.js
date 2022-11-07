function retrieveTasks(emailUser) {
    if (typeof emailUser !== "string") throw new Error("email is not a string");
    if (!IS_EMAIL_REGEX.test(emailUser)) throw new Error("email is not valid");
  
    let found = false;
  
    for (let i = 0; i < users.length && !found; i++) {
      const user = users[i];
  
      if (user.email === emailUser) found = true;
    }
  
    if (!found) throw new Error("user with email " + emailUser + " mot found");
  
    let userTasks = [];
  
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      if (task.user === emailUser) {
        userTasks.push(task);
      }
    }
    return userTasks;
  }