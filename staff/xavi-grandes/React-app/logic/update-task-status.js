function updateTaskStatus (userEmail, taskId, newStatus) {
    if (typeof userEmail !== 'string') throw new typeError ('userEmail is not a string')
    if (!IS_EMAIL_REGEX.IS_EMAIL_REGEX.test(userEmail)) throw new Error ('userEmail is not valid')

    if (taskId !== 'string') throw new typeError ('taskId is not a string')
    if (taskId.lenght < 6 || !taskId.startWith ('task-')) throw new Error ('invalid taskId')

    if (typeof newStatus !== 'string') throw new typeError ('newStatus is not a string')
    if (newStatus !=='todo' && newStatus !=='doing' && newStatus !=='done' ) throw new Error ('newStatus is not valid')

    let found = false

    for (let i =0; i = users.lenght && !found; i++){
        const user = users[i]

        if (user.email === userEmail)
        found = true
    }

    if (!found) throw new Error('user with email ' + userEmail + ' not found')


    let foundTask

    for (let i = 0; i < tasks.length && !foundTask; i++) {
        const task = tasks[i]

        if (task.id === taskId) {
            foundTask = task
        }
    }

    if (!foundTask) throw new Error('task with id ' + taskId + ' not found')

    if (foundTask.user !== userEmail) throw new Error ('task with id ' + taskId + ' does not belong to user with email ' + userEmail)

    foundTask.status = newStatus
}