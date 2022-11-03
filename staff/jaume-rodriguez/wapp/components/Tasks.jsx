const { useState, useEffect } = React

function Tasks() {

    const [tasks, setTasks] = useState([])

    // TASKS REFRESH
    useEffect(() => {
        log('INFO', 'Tasks -> effect "componentDidMount"')

        handleRefreshTasks()
    }, [])

    const handleRefreshTasks = () => {
        log('INFO', 'Tasks: handleRefreshTasks');

        try {
            const tasks = retrieveTasks(user.id)
            //setTasks({ tasks: tasks })
            setTasks(tasks)
        } catch (error) {
            alert(error.message)
        }
    }

    // TASKS CREATION
    const handleCreateTask = (status) => {
        try {
            createTask(user.id, status)
            handleRefreshTasks()

        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>
            {/* TASKS PANEL*/}
            <section className="flex z-1 w-full justify-center flex-wrap">
                <div className="flex flex-row justify-center content-center z-0 p-8 bg-sky-500 border-black border-b border-solid w-full h-16">
                    <span className="self-center font-semibold text-4xl text-sky-100">
                        My Tasks
                    </span>
                </div>
                {/*TASKS*/}
                <div className="flex flex-row flex-wrap justify-center m-4 gap-x-4">
                    {/* TO DO TASKS*/}
                    <section className="flex flex-col items-center bg-white p-4 w-80 font-semibold bg-inherit text-white">
                        <div className="flex flex-row w-full">
                            <span className="align-self-start text-lg text-black text-base font-normal">Pendiente</span>
                            <h1 className="ml-auto text-black self-end material-symbols-outlined font-normal">
                                more_horiz
                            </h1>
                        </div>
                        <hr className="w-full mx-auto my-2 border-black" />
                        {tasks.filter(task => task.status === 'todo').map(task =>
                            // COMPONENTE TASK
                            <Task
                                key={task.id}
                                task={task}
                                onUpdateTaskStatus={handleRefreshTasks}
                                onDeleteTask={handleRefreshTasks} />)}
                        <div
                            className="w-full p-2 px-4 flex flex-row items-end rounded border-solid border-sky-600 border-t border-b-4 border-x bg-sky-100 hover:bg-sky-200 cursor-pointer text-sm"
                            onClick={() => { handleCreateTask('todo') }}>
                            <span
                                className="material-symbols-outlined text-black">
                                add
                            </span>
                            <span className="align-self-start text-medium text-black font-normal">Add new task</span>
                        </div>
                    </section>
                    {/* DOING TASKS*/}
                    <section className="flex flex-col items-center bg-white p-4 w-80 font-semibold bg-inherit text-white">
                        <div className="flex flex-row w-full">
                            <span className="align-self-start text-lg text-black text-base font-normal">En proceso</span>
                            <h1 className="ml-auto text-black self-end material-symbols-outlined font-normal">
                                more_horiz
                            </h1>
                        </div>
                        <hr className="w-full mx-auto my-2 border-black" />
                        {tasks.filter(task => task.status === 'doing').map(task =>
                            // COMPONENTE TASK
                            <Task
                                key={task.id}
                                task={task}
                                onUpdateTaskStatus={handleRefreshTasks}
                                onDeleteTask={handleRefreshTasks} />)}
                        <div
                            className="w-full p-2 px-4 flex flex-row items-end rounded border-solid border-sky-600 border-t border-b-4 border-x bg-sky-100 hover:bg-sky-200 cursor-pointer text-sm"
                            onClick={() => { handleCreateTask('doing') }}>
                            <span
                                className="material-symbols-outlined text-black">
                                add
                            </span>
                            <span className="align-self-start text-medium text-black font-normal">Add new task</span>
                        </div>
                    </section>
                    {/* DONE TASKS*/}
                    <section className="flex flex-col items-center bg-white p-4 w-80 font-semibold bg-inherit text-white">
                        <div className="flex flex-row w-full">
                            <span className="align-self-start text-lg text-black text-base font-normal">Hecho</span>
                            <h1 className="ml-auto text-black self-end material-symbols-outlined font-normal">
                                more_horiz
                            </h1>
                        </div>
                        <hr className="w-full mx-auto my-2 border-black" />
                        {tasks.filter(task => task.status === 'done').map(task =>
                            // COMPONENTE TASK
                            <Task
                                key={task.id}
                                task={task}
                                onUpdateTaskStatus={handleRefreshTasks}
                                onDeleteTask={handleRefreshTasks} />)}
                        <div
                            className="w-full p-2 px-4 flex flex-row items-end rounded border-solid border-sky-600 border-t border-b-4 border-x bg-sky-100 hover:bg-sky-200 cursor-pointer text-sm"
                            onClick={() => { handleCreateTask('done') }}>
                            <span
                                className="material-symbols-outlined text-black">
                                add
                            </span>
                            <span className="align-self-start text-medium text-black font-normal">Add new task</span>
                        </div>
                    </section>
                </div>
            </section >
        </>
    );

}