
function retrieveTasks(userEmail) {
    let found = false

    for (let i = 0; i < users.length && !found; i++) {
        const user = users[i]

        if (user.email === userEmail)
            found = true
    }

    // if not found then ...
    if (!found) throw new Error('user with email ' + userEmail + ' not found')


    return tasks.filter(task => { return task.user === userEmail })

}
