const { useState, useEffect } = React

function TasksPanel() {

   const  [tasks, setTasks] = useState([])

    useEffect (() => {
        handleRefreshTasks()
    }, [])

    const handleRefreshTasks = () => {
        try {
            const tasks = retrieveTasks(user.email)

            setTasks(tasks)
        } catch (error) {
            alert(error.message)
        }
    }
    const handleNewTaskClick = status => {
    
        try {
            createTask(user.email, status)

            const tasks = retrieveTasks(user.email)

            setTasks(tasks)
        }
        catch (error) {
            alert(error.message)
        }
    }
    return <div className="flex justify-center">
        <section className="flex flex-col mt-24">
            <h2 className="text-center text-2xl p-3 font-bold">Tasks</h2>
            <div className="flex flex-row gap-24 p-3">

                <div className="shadow-xl border-solid border-black border-2 rounded-lg p-3 w-64 bg-orange-300 h-fit">
                    <section className="">
                        <h2 className="font-semibold text-lg">TODO</h2>
                        {tasks.filter(task => task.status === 'todo').map(task => <Task
                            key={task.id}
                            task={task}
                            handleUpdateTask={handleRefreshTasks}
                            handleDeleteButton={handleRefreshTasks}
                            retrieveNewTaskStatus={handleRefreshTasks} />)}
                    </section>
                    <div className="flex justify-end">
                        <button className="material-symbols-outlined z-10" onClick={() => handleNewTaskClick('todo')}>add</button>
                    </div>
                </div>

                <div className="shadow-xl border-solid border-black border-2 rounded-lg p-3 w-64 bg-orange-300 h-fit">
                    <section className="">
                        <h2 className="font-semibold text-lg">DOING</h2>
                        {tasks.filter(task => task.status === 'doing').map(task =>
                            <Task
                                key={task.id}
                                task={task}
                                handleUpdateTask={handleRefreshTasks}
                                handleDeleteButton={handleRefreshTasks}
                                retrieveNewTaskStatus={handleRefreshTasks} />)}
                    </section>
                    <div className="flex justify-end">
                        <button className="material-symbols-outlined z-10" onClick={() => handleNewTaskClick('doing')}>add</button>
                    </div>
                </div>
                <div className="shadow-xl border-solid border-black border-2 rounded-lg p-3 w-64 bg-orange-300 h-fit">
                    <section className="">
                        <h2 className="font-semibold text-lg">DONE</h2>
                        {tasks.filter(task => task.status === 'done').map(task => <Task
                            key={task.id}
                            task={task}
                            handleUpdateTask={handleRefreshTasks}
                            handleDeleteButton={handleRefreshTasks}
                            retrieveNewTaskStatus={handleRefreshTasks} />)}
                    </section>
                    <div className="flex justify-end">
                        <button className="material-symbols-outlined z-10" onClick={() => handleNewTaskClick('done')}>add</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
}