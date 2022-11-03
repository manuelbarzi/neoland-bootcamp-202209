function deleteTask(taskId) {

    let foundTask, index = -1

    for (let i = 0; i < tasks.length && !foundTask; i++) {
        const task = tasks[i]

        if (task.id === taskId) {
            foundTask = task

            index = i
        }
    }

    for (let i = index; i < tasks.length - 1; i++) {
        tasks[i] = tasks[i + 1]
    }

    tasks.length--
}