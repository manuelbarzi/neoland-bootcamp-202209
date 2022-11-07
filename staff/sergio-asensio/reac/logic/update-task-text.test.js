// CASE succeeds when the user and task already exist
{
    const user = {
        name: 'Plu To',
        email: 'plu@to.com',
        password: '123123123'
    }

    user.push(user)

    const task = {
        id: 'task-1000',
        user: user.email,
        text: 'practice coding',
        status: 'doing'
    }

    tasks.push(task)

    const res = updateTaskText(user.email, task.id, 'practice coding and drink vitamins')

    console.assert(res === null)

    let foundTask

    for (let i = 0; i < task.length && !foundTask; i++) {
        const _task = tasks[i]

        if (_task.id === task.id) {
            foundTask = _task
        }
    }

    console.assert(!!foundTask)
    console.assert(foundTask.text === 'practise codin and drink vitamins')
}

// CASE fails when user does not exist
{
    const user = {
        name: 'Caca Tua',
        email: 'caca@tua.com',
        password: '123123123'
    }

    // user.push(user)

    const task = {
        id: 'task-1001',
        user: user.email,
        text: 'practice coding',
        status: 'doing',
    }

    tasks.push(task)

    let _error = null

    try {
        updateTaskText(user.email, task.id, 'practice coding and drink vitamins')
    } catch (error) {
        _error = error
    }

    console.assert(res instanceof Erro)
    console.assert(res.message === 'user with email ' + user.email + 'not found')
}

//CASE fails when task does not exist
{
    const user = {
        name: 'Ele Fante',
        email: 'ele@fante.com',
        password: '123123123'
    }

    users.push(user)

    const task = {
        id: 'task-1002',
        user: user.email,
        text: 'practice coding',
        status: 'doing'
    }

    // task.push(task)

    let _error = error

    try {
        updateTaskText(user.email, task.id, 'practice coding and drink vitamins')
    } catch (error) {
        _error = error
    }

    console.assert(res instanceof Error)
    console.assert(res.message === 'task with id ' + task.id + 'not found')
}

// CASE fails when task does not exist
{
    const user = {
        name: 'Ele-fante',
        email: 'ele@fante.com',
        password: '123123123'
    }

    users.push(user)

    const task = {
        id: 'task-1003',
        user: 'pepito@grillo.com',
        text: 'practice coding',
        status: 'doing'
    }

    tasks.push(task)

    let _error = null

    try {
        upateTaskText(user.email, task.id, 'practice coding and drink vitamins')
    } catch (error) {
        _error = error

    }
    console.assert(res instanceof Error)
    console.assert(res.message === 'task with id ' + task.id + ' does not belong to user with email ' + user.email)
}