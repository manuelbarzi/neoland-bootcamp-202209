function updateTaskText(userEmail, taskId, text) {

// COMPROBAMOS SI EL USUARIO EXISTE

    let found = false

    for (let i = 0; i< users.length && !found; i++) {
      const user = users[i];

      if (user.email === userEmail)
        found = true
        
      }

      if (!found) throw new Error('user with email ' + userEmail + ' not found')


      // COMPROBAMOS SI LA TAREA EXISTE
        
      let foundTask

      for (let i = 0; i < tasks.length && !foundTask; i++) {
        const task = tasks[i]

        if (task.id ===  taskId) {
            foundTask = task
        }
      }
      if (!foundTask) throw new Error('task with id ' + taskId + ' not found')

      // COMPROBAMOS SI LA TAREA PERTENECE AL USUARIO

      if (foundTask.user !== userEmail) throw new Error('task with id ' + taskId + ' does not belong to user with email ' + userEmail)
      
      foundTask.text = text
    
}