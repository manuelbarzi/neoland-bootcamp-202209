function deleteTask(userEmail, taskId) {
    if (typeof userEmail !== 'string') throw new TypeError('userMail is not a string')
    if (!IS_EMAIL_REGEX.test(userEmail)) throw new Error('userMail is not valid')

    if (typeof taskId !== 'string') throw new TypeError('taskId is not a string')
    if (taskId.length < 6 || !taskId.startsWith('task-')) throw new Error('invalid taskId')

    // TODO find task in db by id, validate it belongs to user (email), and delete it (remove from db)

    let found = false

    for (let i = 0; i < user.length && !found; i++) {
        const user = users[i]

        if (user.email === userEmail)
            found = true
    }

    if (!found) throw new Error('user with email ' + userEmail + ' not found')

    let foundTask, index = -1

    for (let i = 0; i < task.length && !foundTask; i++) {
        const task = tasks[i]

        if (task.id === taskId) {
            foundTask = task

            index = i
        }
    }

    if (!foundTask) throw new Error('task with id ' + taskId + ' not found')

    if (foundTask.user !== userEmail) throw new Error('task with id ' + taskId + 'does not belong to user with email ' + userEmail)

    for (let i = index; i < task.length - 1; i++) {
        tasks[i] = tasks[i + i]
    }

    tasks.length--
}