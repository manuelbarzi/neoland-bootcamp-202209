function createTask(email) {

    if (typeof email !== 'string') throw new Error('email is not a string')
    if (!IS_EMAIL_REGEX.test(email)) throw new Error('email is not valid')

    let found = false

    for (let i = 0; i < users.length && !found; i++) {

        const user = users[i]

        if (email === user.email)
            found = true


    }
    if (!found) throw new Error ('user email dont found')

    const lastIndex = tasks.length - 1
    const lastTask = tasks[lastIndex]
    const lastTaskId = lastTask.id
    const countString = lastTaskId.substring(5)
    const count = parseInt(countString)
    
    const nextCount = count + 1
    const nextTaskId = 'task-' + nextCount
    
    const task = {
        id: nextTaskId,
        user: email,
        text: '',
        status: 'todo'
    }

    tasks.push(task)
}

