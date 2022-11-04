function deleteTaskCard(id) {
    //search task in array 
    var indexinDbArray = null

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        if (task.id === id) {
            indexinDbArray = i
        }

    }
    //delete task from array

    if (indexinDbArray > -1) {
        tasks.splice(indexinDbArray, 1);
    } else {
        log('ERROR', 'task not found')
    }

}