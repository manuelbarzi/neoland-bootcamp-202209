
function retrieveTasks(userEmail) {

    log('DEBUG', `Retrieved tarks for ${userEmail}`)

    var found = false

    for (let i = 0; i < users.length && !found; i++) {
        const user = users[i]

        if (user.email === userEmail)
            found = true
    }

    // if not found then ...
    if (!found) return new Error('user with email ' + userEmail + ' not found')

    // var filteredTasks = []

    // for (var i = 0; i < tasks.length; i++) {
    //     var task = tasks[i]

    //     if (task.user === userEmail)
    //         filteredTasks.push(task)
    // }

    const userTasks = tasks.filter(task => { return task.user === userEmail })

    log('DEBUG', `Retrieved ${userTasks.length} tasks`)

    return userTasks
}
