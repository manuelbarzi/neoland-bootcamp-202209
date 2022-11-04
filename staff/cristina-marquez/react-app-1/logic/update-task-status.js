function updateTaskStatus(taskId, newStatus) {


    if (typeof newStatus !== 'string') throw new TypeError('newStatus is not a string')
    if (newStatus !== 'TODO' && newStatus !== 'IN_PROGRESS' && newStatus !== 'COMPLETED') throw new Error('newStatus is not valid')


    let foundTask

    for (let i = 0; i < tasks.length && !foundTask; i++) {
        const task = tasks[i]

        if (task.id === taskId) {
            foundTask = task
        }
    }


    foundTask.status = newStatus
}