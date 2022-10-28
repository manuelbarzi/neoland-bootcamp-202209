function retrieveTasks(userEmail){
    if (typeof userEmail !== 'string') throw new Error('email is not a string')
    if (!IS_EMAIL_REGEX.test(userEmail)) throw new Error('email is not valid')

    var found = false

   for ( var i = 0; i < users.length && !found; i++) {
        var user = users[i]
        
        if (user.email === userEmail)
           found = true
   }
   // if not found then..
   if (!found) throw new Error ('user with email ' + userEmail + ' not found' )
    
   var filteredTasks = []

   for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i]

       if (task.user === userEmail)
       filteredTasks.push(task)
   }

    return filteredTasks
}