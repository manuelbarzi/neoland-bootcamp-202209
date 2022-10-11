function deleteTask(userId, taskId){
    var found = false
        for (var i = 0; i < users.length && !found; i++) {
            var user = users[i]
            
            if (user.id === userId)
                found = true
        }
    
        if (!found) return new Error("user with id " + userId + " not found")

        var foundTask = false
    
        for (var i = 0; i < tasks.length && !foundTask; i++) {
            var task = tasks[i]
            
            if (task.id === taskId)
                foundTask = task
        }
    
        if (!foundTask) return new Error("task with id " + taskId + " not found")
        if (foundTask.user !== userId) return new Error("task with id " + taskId + " not found")

        tasks.splice(i-1, 1);
        return null
}