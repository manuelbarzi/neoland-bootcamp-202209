function Task(props) {
    log('INFO', 'Task -> render')

    const handleUpdateTaskText = (taskId, newText) => {
        log('INFO', 'Tasks -> handleUpdateTaskText')

        try {
            updateTaskText(user.email, taskId, newText)
        } catch (error) {
            alert(error.message)
        }
    }

    const handleDeleteTask = taskId => {
        log('INFO', 'Home -> handleDeleteTask')

        try {
            deleteTask(user.email, taskId)

            props.onDeleteTask()
        } catch (error) {
            alert(error.message)
        }
    }

    const handleUpdateTaskStatus = (taskId, newStatus) => {
        log('INFO', 'Home -> handleUpdateTaskStatus')

        try {
            updateTaskStatus(user.email, taskId, newStatus)

            props.onUpdateTaskStatus()
        } catch (error) {
            alert(error.message)
        }
    }

    return <article key={props.task.id} className="border-2 p-1">
        <p suppressContentEditableWarning={true} contentEditable="true" onKeyUp={event => handleUpdateTaskText(props.task.id, event.target.innerText)}>{props.task.text}</p>

        <button className="material-symbols-outlined" onClick={() => handleDeleteTask(props.task.id)}>delete</button>

        <select className="material-symbols-outlined" onChange={event => handleUpdateTaskStatus(props.task.id, event.target.value)} defaultValue="">
            <option disabled hidden className="text-sm" value="">width_normal</option>
            {props.alternateStatuses.map(status => <option key={status} value={status.toLowerCase()}>{status}</option>)}
        </select>
    </article>
}