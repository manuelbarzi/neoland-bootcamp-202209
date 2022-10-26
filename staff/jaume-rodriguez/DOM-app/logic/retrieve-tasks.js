function retrieveTasks(userId) {

    let found = false

    for (let i = 0; i < users.length && !found; i++) {
        const user = users[i]

        if (user.id === userId) {
            found = true
        }
    }

    if (!found) throw new Error("user with id " + userId + " not found")

    let filteredTasks = []

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i]

        if (task.user === userId) {
            filteredTasks.push(task)
        }
    }

    return filteredTasks
}