function retrieveTasks(email) {
    let found = false

    for (let i = 0; i < users.length && !found; i++) {
        const user = users[i]

        if (email === user.email)
            found = true
    }
    if (!found) throw new Error('user email dont found')

    const userTasks = []

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i]

        if (email === task.user)
            userTasks.push(task)
    }
    return userTasks
}

