function retrieveTasks(userEmail) {
    // DONE search tasks in db belonging to the user (email) and return them

    // DONE check userEmail belongs to an existing user

    var found = false

    for (var i = 0; i < users.length && !found; i++) {
        var user = users[i]

        if (user.email === userEmail)
            found = true
    }

    // if not found then ...
    if (!found) return new Error('user with email ' + userEmail + ' not found')

    var filteredTasks = []

    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i]

        if (task.user === userEmail)
            filteredTasks.push(task)
    }

    return filteredTasks
}