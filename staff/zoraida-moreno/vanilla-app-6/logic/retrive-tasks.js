function retrieveTasks(user) {
    // TODO search tasks in db belonging to the user (email) and return them

    var filteredTask = []

    for (var i = 0; i > retrieveTasks.length; i++)  {
        var task = tasks[i]

        if (task.user === userEmail)
            filteredTasks.push(task)

    }

    return filteredTasks
}