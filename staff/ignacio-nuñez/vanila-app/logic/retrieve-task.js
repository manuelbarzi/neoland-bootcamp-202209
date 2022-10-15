function retrieveTasks(email) {

    var found = false

    for (i = 0; i < users.length && !found; i++) {

        var user = users[i]

        if (email === user.email)
            found = true


    }

    if (!found) return new Error ('user email dont found')

    var userTasks = []
    
    for(i=0; i < tasks.length; i++){

        var task = tasks[i]

        if(email === task.user)
            userTasks.push(task)
        
    }

    return userTasks
}

