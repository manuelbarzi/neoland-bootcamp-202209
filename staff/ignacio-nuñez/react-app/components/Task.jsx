function Task(props) {
    const handleUpdateTask = (taskId, taskText) => {
        try {
            updateTaskText(user.email, taskId, taskText)
        } catch (error) {
            alert(error.message)
        }
    }

    const handleNewTaskStatus = (taskId, taskStatus) => {
        try {
            updateTaskStatus(user.email, taskId, taskStatus)

            props.retrieveNewTaskStatus()
        } catch (error) {
            alert(error.message)
        }
    }

    const handleDeleteButton = (taskId) => {
        try {
            deleteTask(user.email, taskId)

            props.handleDeleteButton()
        } catch (error) {
            alert(error.message)
        }
    }

    return <article className="p-1 border-solid border-black border-2 rounded-lg mt-3.5"><div className="flex">
        <p className="z-10 w-5/6 rounded" suppressContentEditableWarning={true} contentEditable="true" onKeyUp={event =>
            handleUpdateTask(props.task.id, event.target.innerText)}>{props.task.text}</p>
        <button className="z-10 material-symbols-outlined w-1/6" onClick={() => {handleDeleteButton(props.task.id) }}>delete</button>
    </div>
        <select value="start" className="rounded-lg cursor-pointer" onChange={event => handleNewTaskStatus(props.task.id, event.target.value)}>
            <option disabled hidden value="start">-change status-</option>
            {props.task.status === 'todo' ? <>
                <option value='doing'>DOING</option>
                <option value='done' >DONE</option> </> :
                props.task.status === 'doing' ? <>
                    <option value='todo'>TODO</option>
                    <option value='done' >DONE</option> </> :
                    <>
                        <option value='todo'>TODO</option>
                        <option value='doing' >DOING</option> </>}
        </select>
    </article>
}
