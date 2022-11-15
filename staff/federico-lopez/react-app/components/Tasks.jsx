function Tasks(props) {
    log('INFO', 'Tasks -> render')

    const handleUpdateTaskText = (taskId, newText) => {
        log('INFO', 'Tasks -> handleUpdateTaskText')

        props.onUpdateTaskText(taskId, newText)
    }

    const handleDeleteTask = taskId => {
        log('INFO', 'Tasks -> handleDeleteTask')

        props.onDeleteTask(taskId)
    }

    const handleUpdateTaskStatus = (taskId, newStatus) => {
        log('INFO', 'Tasks -> handleUpdateTaskStatus')

        props.onUpdateTaskStatus(taskId, newStatus)
    }

    return <section className="flex flex-col items-center">
        <h2>Tasks</h2>
        <div className="flex flex-col sm:flex-row gap-4">
            <section className="flex flex-col gap-2 border-2 p-2">
                <h2>TODO</h2>
                {props.tasks.filter(task => task.status === 'todo').map(task => <article key={task.id} className="border-2 p-1">
                    <p suppressContentEditableWarning={true} contentEditable="true" onKeyUp={event => handleUpdateTaskText(task.id, event.target.innerText)}>{task.text}</p>

                    <button className="material-symbols-outlined" onClick={() => handleDeleteTask(task.id)}>delete</button>

                    <select className="material-symbols-outlined" onChange={event => handleUpdateTaskStatus(task.id, event.target.value)} defaultValue="">
                        <option disabled hidden className="text-sm" value="">width_normal</option>
                        <option value="doing">DOING</option>
                        <option value="done">DONE</option>
                    </select>
                </article>)}
            </section>
            <section className="border-2 p-2">
                <h2>DOING</h2>
                {props.tasks.filter(task => task.status === 'doing').map(task => <article key={task.id} className="border-2 p-1">
                    <p suppressContentEditableWarning={true} contentEditable="true" onKeyUp={event => handleUpdateTaskText(task.id, event.target.innerText)}>{task.text}</p>

                    <button className="material-symbols-outlined" onClick={() => handleDeleteTask(task.id)}>delete</button>

                    <select className="material-symbols-outlined" onChange={event => handleUpdateTaskStatus(task.id, event.target.value)} defaultValue="">
                        <option disabled hidden className="text-sm" value="">width_normal</option>
                        <option value="todo">TODO</option>
                        <option value="done">DONE</option>
                    </select>
                </article>)}
            </section>
            <section className="border-2 p-2">
                <h2>DONE</h2>
                {props.tasks.filter(task => task.status === 'done').map(task => <article key={task.id} className="border-2 p-1">
                    <p suppressContentEditableWarning={true} contentEditable="true" onKeyUp={event => handleUpdateTaskText(task.id, event.target.innerText)}>{task.text}</p>

                    <button className="material-symbols-outlined" onClick={() => handleDeleteTask(task.id)}>delete</button>

                    <select className="material-symbols-outlined" onChange={event => handleUpdateTaskStatus(task.id, event.target.value)} defaultValue="">
                        <option disabled hidden className="text-sm" value="">width_normal</option>
                        <option value="todo">TODO</option>
                        <option value="doing">DOING</option>
                    </select>
                </article>)}
            </section>
        </div>
    </section>
}