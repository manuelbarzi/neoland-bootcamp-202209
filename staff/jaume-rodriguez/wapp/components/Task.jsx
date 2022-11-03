function Task(props) {

    // TASK FUNCTIONS
    const handleUpdateTaskText = (taskId, newText) => {
        log('INFO', 'Tasks: handleUpdateTaskText');
        try {
            updateTaskText(user.id, taskId, newText);
        } catch (error) {
            alert(error.message);

            return;
        }
    }

    const handleUpdateTaskStatus = (taskId, newStatus) => {
        log('INFO', 'Tasks: handleUpdateTaskStatus');
        try {
            updateTaskStatus(user.id, taskId, newStatus);
            props.onUpdateTaskStatus()

        } catch (error) {
            alert(error.message);

            return;
        }
    }

    const handleDeleteTask = (taskId) => {
        log('INFO', 'Tasks: handleDeleteTask');
        try {
            deleteTask(user.id, taskId);
            props.onDeleteTask()

        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <article
            className="w-full p-4 flex justify-center flex-col mb-4 rounded border-solid border-sky-600 border-t border-b-4 border-x bg-sky-100">
            <textarea
                defaultValue={props.task.text}
                className="flex flex-col text-justify bg-cyan-50 p-4 text-sm border-sky-600 border bg-sky-200 text-black text-[14px] font-normal"
                onKeyUp={(event) => handleUpdateTaskText(props.task.id, event.target.value)}
            >
            </textarea>
            <div className="flex flex-row mt-3">
                <select
                    className="text-black bg-inherit self-end font-normal text-base"
                    onChange={(event) => handleUpdateTaskStatus(props.task.id, event.target.value)}>
                    <option disabled selected hidden value=''>
                        {props.task.status === 'todo' ? 'Pendiente' :
                            props.task.status === 'doing' ? 'En proceso' :
                                props.task.status === 'done' ? 'Hecho' : 'Estado'}
                    </option>
                    {props.task.status === 'todo' ? <>
                        <option value="doing">En Proceso</option>
                        <option value="done">Hecho</option>
                    </>
                        :
                        props.task.status === 'doing' ? <>
                            <option value="todo">Pendiente</option>
                            <option value="done">Hecho</option>
                        </>
                            :
                            <>
                                <option value="todo">Pendiente</option>
                                <option value="doing">En Proceso</option>
                            </>
                    }
                </select>
                <button
                    className="material-symbols-outlined self-center rounded cursor-pointer border-none mt-3 ml-auto text-sky-900"
                    onClick={() => handleDeleteTask(props.task.id)}>delete
                </button>
            </div>
        </article>
    )
}