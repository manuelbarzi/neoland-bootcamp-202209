function Tasks(props) {
    log('INFO', 'Tasks -> render')

    const handleUpdateTaskText = (taskId, newText) => {
        log('INfO', 'Tasks -> handleUpdateTaskText')

        props.onUpdateTaskText(taskId, newText)
    }

    const handleDeleteTask = taskId => {
        log('INFO', 'Tasks -> handleDeleteTask')

        props.onDeleteTask(taskId)
    }

    const handleUpdateTaskStatus = (taskId, newStatus)  => {
        log('INFO', 'Tasks -> handleUpdateTaskStatus')

        props.onUpdateTaskStatus(taskId, newStatus)
    }

     const handleAddTask = () => {
        log('INFO', 'Header -> handleAddTask')

        props.onAddTask()
    }

    return <section className="flex flex-col items-center gap-4">
    <h2 className="text-3xl font-extrabold italic">Tasks</h2>
    <div className="flex flex-col sm:flex-row gap-x-44">
        <section className="flex flex-col h-fit rounded-lg order-inherit gap-2 w-72 border-4 p-2">
            <h2 className="font-extrabold">TODO</h2> {/*se aplica filter que devuelve un array y sobre ese nuevo array se aplica el metodo map  */}
            {props.tasks.filter(task => task.status === 'todo').map(task => <article key={task.id} className="rounded-lg border-2 p-1">
                <p suppressContentEditableWarning={true} contentEditable="true" onKeyUp={event => handleUpdateTaskText(task.id, event.target.innerText)}>{task.text}</p>
                <div className="flex justify-between">
                    <button className="material-symbols-outlined" onClick={() => handleDeleteTask(task.id)}>delete</button>
                    <select className="material-symbols-outlined w-4 bg-transparent" onChange={event => handleUpdateTaskStatus(task.id, event.target.value)} defaultValue="">
                        <option disabled hidden className="text-sm" value="">Add_box</option>
                        <option className="text-xs" value="doing">DOING</option>
                        <option className="text-xs" value="done">DONE</option>
                    </select>
                </div>
            </article>)}
        </section>
        <section className="flex flex-col h-fit border-4 rounded-lg order-inherit w-72 p-2 gap-2">
            <h2 className="font-extrabold">DOING</h2>
            {props.tasks.filter(task => task.status === 'doing').map(task => <article key={task.id} className="rounded-lg border-2 p-1">
                <p suppressContentEditableWarning={true} contentEditable="true" onKeyUp={event => handleUpdateTaskText(task.id, event.target.innerText)}>{task.text}</p>
                <div className="flex justify-between">
                    <button className="material-symbols-outlined" onClick={() => handleDeleteTask(task.id)}>delete</button>
                    <select className="material-symbols-outlined w-4  bg-transparent" onChange={event => handleUpdateTaskStatus(task.id, event.target.value)} defaultValue="">
                        <option disabled hidden className="text-sm" value="">width_normal</option>
                        <option className="text-xs" value="done">DONE</option>
                        <option className="text-xs" value="todo">TODO</option>
                    </select>
                </div>
            </article>)}
        </section>
        <section className="border-4 h-fit rounded-lg order-inherit w-72 p-2 gap-2">
            <h2 className="font-extrabold">DONE</h2>
            {props.tasks.filter(task => task.status === 'done').map(task => <article key={task.id} className="rounded-lg border-2 p-1">
                <p suppressContentEditableWarning={true} contentEditable="true" onKeyUp={event => handleUpdateTaskText(task.id, event.target.innerText)}>{task.text}</p>
                <div className="flex justify-between">
                    <button className="material-symbols-outlined" onClick={() => handleDeleteTask(task.id)}>delete</button>
                    <select className="material-symbols-outlined w-4  bg-transparent" onChange={event => handleUpdateTaskStatus(task.id, event.target.value)} defaultValue="">
                        <option disabled  hidden className="text-sm" value="">width_normal</option>
                        <option className="text-xs" value="doing">DOING</option>
                        <option className="text-xs" value="todo">TODO</option>
                    </select>
                </div>
            </article>)}
        </section>
    </div>
    <div className="flex flex-col items-center text-white my-2 border-1 p-2 mx-10 font-semibold italic rounded-full bg-indigo-600 rounded-x1 shadow-2xl shadow-gray-900">
        <button onClick={handleAddTask}>+ Add task</button>
    </div>
</section>
}