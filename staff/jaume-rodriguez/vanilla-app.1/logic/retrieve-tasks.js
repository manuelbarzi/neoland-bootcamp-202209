function retrieveTasks(userId) {

    var found = false

    for (var i = 0; i < users.length && !found; i++) {
        var user = users[i]

        if (user.id === userId) {
            found = true
        }
    }

    if (!found) throw new Error("user with id " + userId + " not found")

    var filteredTasks = []

    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i]

        if (task.user === userId) {
            filteredTasks.push(task)
        }
    }

    return filteredTasks
}