function deleteTask(userId, taskId) {
    if (typeof userId !== "string") throw new Error("userId is not string");

    if (typeof taskId !== "string") throw new Error("taskId is not string");
    if (typeof taskId.length < 6 || !taskId.startsWith("task-")) throw new Error("invalid taskId");

    var found = false
    for (var i = 0; i < users.length && !found; i++) {
        var user = users[i]

        if (user.id === userId) {
            found = true
        }
    }

    if (!found) throw new Error("user with id " + userId + " not found")

    var foundTask = false
    var index = -1

    for (var i = 0; i < tasks.length && !foundTask; i++) {
        var task = tasks[i]

        if (task.id === taskId)
            foundTask = task
        index = i
    }

    if (!foundTask) throw new Error("task with id " + taskId + " not found")
    if (foundTask.user !== userId) throw new Error("task with id " + taskId + " not found")

    for (var i = index; i < tasks.length - 1; i++) {
        tasks[i] = tasks[i + 1]
    }

    tasks.length--
    /* tasks.splice(i-1, 1); */
}