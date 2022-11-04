function updateTaskText(userEmail, taskId, text) {
    var found = false

    for (let i = 0; i < users.length && !found; i++) {
        const user = users[i]

        if (user.email === userEmail)
            found = true
    }

    if (!found) return new Error('user with email ' + userEmail + ' not found')

    var foundTask

    for (let i = 0; i < tasks.length && !foundTask; i++) {
        const task = tasks[i]

        if (task.id === taskId) {
            foundTask = task
        }
    }

    if (!foundTask) return new Error('task with id ' + taskId + ' not found')

    if (foundTask.user !== userEmail) return new Error('task with id ' + taskId + ' does not belong to user with email ' + userEmail)

    foundTask.text = text

    return null
}