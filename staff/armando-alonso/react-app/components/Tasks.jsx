const { useState, useEffect } = React

function Tasks(props) {
    log('INFO', 'Tasks -> render')

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        log('INFO', 'App -> effect "componentDidMount"')

        return () => log('INFO', 'App -> effect "componentWillUnmount"')
    }, [])

    useEffect(() => {
        log('INFO', 'Tasks -> effect "componentWillReceiveProps"')

        handleRefreshTasks()
    }, [props])


    const handleRefreshTasks = () => {
        log('INFO', 'Tasks -> handleRefreshTasks')

        try {

            const tasks = retrieveTasks(user.email)

            setTasks(tasks)

        } catch (error) {

            alert(error.message)
        }
    }

    const handleAddTask = (status) => {

        log('INFO', 'Tasks -> handleAddTask')

        try {
            createTask(user.email, status)

            handleRefreshTasks()
            
          } catch (error) {

            alert(error.message)
          }
    }

    return <section className="flex flex-col items-center bg-[#D3EBCD] h-screen mt-12">
    <h2 className="p-4">Tasks</h2>
    <div className="flex flex-col sm:flex-row gap-20 bg-[#AEDBCE]">
        <section className="flex flex-col gap-2 border-2 p-2">
            <h2 className="flex flex-col items-center">TODO</h2>
            {tasks.filter(task => task.status === 'todo').map(task => 
                <Task
                    key={task.id}
                    task={task}
                    onDeleteTask={handleRefreshTasks}
                    onUpdateTaskStatus={handleRefreshTasks}
                    alternateStatuses={['DOING', 'D0NE']}
                />
            )}
            <button className="material-symbols-outlined" onClick={event => handleAddTask('todo')}>add</button>
        </section>
        <section className="flex flex-col gap-2 border-2 p-2">
            <h2 className="flex flex-col items-center">DOING</h2>
            {tasks.filter(task => task.status === 'doing').map(task => 
                <Task
                    key={task.id}
                    task={task}
                    onDeleteTask={handleRefreshTasks}
                    onUpdateTaskStatus={handleRefreshTasks}
                    alternateStatuses={['TODO', 'D0NE']}
                />
            )}
            <button className="material-symbols-outlined" onClick={event => handleAddTask('doing')}>add</button>
        </section>
        <section className="flex flex-col gap-2 border-2 p-2">
            <h2 className="flex flex-col items-center">DONE</h2>
            {tasks.filter(task => task.status === 'done').map(task => 
                <Task
                    key={task.id}
                    task={task}
                    onDeleteTask={handleRefreshTasks}
                    onUpdateTaskStatus={handleRefreshTasks}
                    alternateStatuses={['TODO', 'DOING']}
                />
            )}
            <button className="material-symbols-outlined" onClick={event => handleAddTask('done')}>add</button>
        </section>
    </div>
    </section>
}




