const { useState, useEffect } = React

function Tasks(props) {
    log('INFO', 'Tasks -> render')

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        log('INFO', 'Tasks -> effect "componentDidMount"')

        // handleRefreshTasks()

        return () => log('INFO', 'Tasks -> effect "componentWillUnmounth')
    }, [props])

    useEffect(() => {
        log('INFO', 'Tasks -> effect "componentWillRecieveProps')

        handleRefreshTasks()
    }, [props])

    const handleRefreshTasks = () => {
        log('INFO', 'Tasks -> handleRefreshTasks')

        try {
            const tasks = retrieveTasks(user.email)

            setTasks( tasks )
        } catch (error) {
            alert(error.message)
        }
    }

    return <section className="flex flex-col items-center">
        <h2>Tasks</h2>
        <div className="flex flex-col sm:flex-row gap-4">
            <section className="flex flex-col gap-2 border-2 p-2">
                <h2>TODO</h2>
                {tasks.filter(task => task.status === 'todo').map(task => <Task
                        key={task.id}
                        task={task}
                        onDeleteTask={handleRefreshTasks}
                        onUpdateTaskStatus={handleRefreshTasks}
                    />
                )}
            </section>
            <section className="border-2 p-2">
                <h2>DOING</h2>
                {tasks.filter(task => task.status === 'doing').map(task => <Task
                        key={task.id}
                        task={task}
                        onDeleteTask={handleRefreshTasks}
                        onUpdateTaskStatus={handleRefreshTasks}
                    />
                )}
            </section>
            <section className="border-2 p-2">
                <h2>DONE</h2>
                {tasks.filter(task => task.status === 'done').map(task => <Task
                        key={task.id}
                        task={task}
                        onDeleteTask={handleRefreshTasks}
                        onUpdateTaskStatus={handleRefreshTasks}
                    />
                )}
            </section>
        </div>
    </section >
}

