function updateTaskText(userId, taskId, text) {
    if (typeof userId !== "string") throw new Error("userId is not string");

    if (typeof taskId !== "string") throw new Error("taskId is not string");
    if (typeof taskId.length < 6) throw new Error("invalid taskId");

    if (typeof text !== "string") throw new Error("userId is not string");

    let found = false

    for (let i = 0; i < users.length && !found; i++) {
        const user = users[i]

        if (user.id === userId) {
            found = true
        }
    }

    if (!found) throw new Error("user with id " + userId + " not found")

    let foundTask = false

    for (let i = 0; i < tasks.length && !foundTask; i++) {
        const task = tasks[i]

        if (task.id === taskId) {
            foundTask = task
        }
    }

    if (!foundTask) throw new Error("task with id " + taskId + " not found")
    if (foundTask.user !== userId) throw new Error("task with id " + taskId + " not found")

    foundTask.text = text
}