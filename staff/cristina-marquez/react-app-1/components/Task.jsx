function Task(props) {


    const handleUpdateTaskText = (taskId, newText) => {

        try {
            updateTaskText(user.email, taskId, newText)
        } catch (error) {
            alert(error.message)
        }
    }

    const handleDeleteTask = taskId => {

        try {
            deleteTask(taskId)

            props.onDeleteTask()
        } catch (error) {
            alert(error.message)
        }
    }

    const handleUpdateTaskStatus = (taskId, newStatus) => {

        try {
            updateTaskStatus(taskId, newStatus)

            props.onUpdateTaskStatus()
        } catch (error) {
            alert(error.message)
        }
    }

    return <div key={props.task.id} className="task-component mx-3 my-2 flex justify-between content-center">

        <div className="flex content-center pt-3">
            <article contentEditable="true" onKeyUp={event => handleUpdateTaskText(props.task.id, event.target.innerText)}>{props.task.text}</article>
        </div>
        <div className="flex content-center">

            <select
                className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                onChange={event => handleUpdateTaskStatus(props.task.id, event.target.value)}
            >
                <option selected={props.task.status === 'TODO' ? true : false} value="TODO">Todo</option>
                <option selected={props.task.status === 'IN_PROGRESS' ? true : false} value="IN_PROGRESS">In progress</option>
                <option selected={props.task.status === 'COMPLETED' ? true : false} value="COMPLETED">Completed</option>
            </select>
            <span className="material-symbols-outlined task-component delete-icon pt-2" onClick={() => { handleDeleteTask(props.task.id) }}>delete</span>
        </div>


    </div>
}