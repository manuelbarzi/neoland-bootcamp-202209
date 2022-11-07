//CASE succeeds when user and task already exist
{
    var user = {
        name: 'Isaac',
        email: 'isake47@gmail.com',
        password: 123123123
    }

    users.push(user)

    var task = {
        id: 'task-1000',
        user: user.email,
        text: 'practice coding',
        status: 'doing'
    }

    tasks.push(task)

    const res = updateTaskText(user.email, task.id, 'practice coding and drink vitamins')

    console.assert(res === null)

    let foundTask

    for (let i = 0; i < tasks.length; i++) {
        const _task = tasks[i]

        if (_task === task.id) {
            foundTask = _task
        }
    }

    console.assert(!!foundTask)
    console.assert(foundTask.text === 'practice coding and drink vitamins')
}

//CASE fails when user does no exist
{
    const user = {
        name: 'Caca tua',
        email: 'caca@tua.com',
        password: '123123123',
    }

    // users.push(user)

    const task = {
        id: 'task-1001',
        user: user.email,
        text: '',
        status: 'doing'
    }

    tasks.push(task)

    let _error = null

    try {
        updateTaskText(user.email, task.id, 'practice coding and drink vitamins')
    } catch (error) {
        _error = error
    }

    console.assert(_error instanceof Error)
    console.assert(_error.message === 'user with email' + user.mail + 'not found')
}

//CASE fails when task does no exist
{
    const user = {
        name: 'Ele fante',
        email: 'ele@fante.com',
        password: '123123123',
    }

    users.push(user)

    const task = {
        id: 'task-1002',
        user: user.mail,
        text: '',
        status: 'doing'
    }

    //task.push(task)

    let _error = null

    try {
        updateTaskText(user.mail, task.id, 'practice coding and drink vitamins')
    } catch (error) {
        _error = error
    }

    console.assert(_error instanceof Error)
    console.assert(_error.message === 'task with id ' + task.id + ' not found')
}

//CASE fails when task does not belong to the user
{
    const user = {
        name: 'Ele fante',
        email: 'ele@fante.com',
        password: '123123123',
    }

    users.push(user)

    const task = {
        id: 'task-1003',
        user: 'pepito@grillo.com',
        text: '',
        status: 'doing',
    }

    tasks.push(task)

    let _error = null

    try {
        updateTaskText(user.email, task.id, 'practice coding and drink vitamins')
    } catch (error) {
        _error = error
    }

    console.assert(_error instanceof Error)
    console.assert(error.message === 'task with id ' + task.id + ' not found')
}
