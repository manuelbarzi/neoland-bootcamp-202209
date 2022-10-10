function retrieveTasks(userEmail) {
    // TODO search tasks in db belonging to the user (email) and return them

    var filteredTasks = []

    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i]

        if (task.user === userEmail)
            filteredTasks.push(task)
    }

    return filteredTasks
}