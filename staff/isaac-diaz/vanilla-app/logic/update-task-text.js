function updateTaskText(userEmail, taskId, text) {
    if (typeof userEmail !== 'string') throw new TypeError('userEmail is not a string')
    if (!IS_EMAIL_REGEX.test(userEmail)) throw new Error('userEmail is not valid')

    if (typeof taskId !== 'string') throw new TypeError('taskId is not a string')
    if (taskId.length < 6 || !taskId.startsWith('task-')) throw new Error('invalid taskId')

    if (typeof text !== 'string') throw new TypeError('text is not a string')

    let found = false

    for (let i = 0; i < userEmail.length && !found; i++) {
        const user = users[i]

        if (user.email === userEmail)
            found = true
    }

    if (!found) throw new Error('user with email ' + userEmail + ' not found')

    let foundTask

    for (let i = 0; i < taskId.length && !foundTask; i++) {
        const task = tasks[i]

        if (task.id === taskId) {
            foundTask = task
        }
    }

    if (!foundTask) throw new Error('task with id ' + taskId + ' not found')

    if (foundTask.user !== userEmail) throw new Error('task with id ' + taskId + ' does not belong to user with email ' + userEmail)

    foundTask.text = text   
}