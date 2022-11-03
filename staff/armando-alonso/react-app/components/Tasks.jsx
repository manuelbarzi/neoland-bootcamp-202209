class Tasks extends React.Component {
    constructor() {
    log('INFO', 'Tasks -> render')

    super()

    this.state = { tasks: [] }

}

    componentDidMount() {
        log('INFO', 'Home -> componentDidMount')

        try {
            const tasks = retrieveTasks(user.email)

            this.setState({ tasks })

        } catch (error) {

            alert(error.message)
            
        }
    }

    componentWillUnmount() {
        log('INFO', 'Tasks -> componentWillUnmount')
    }

    componentWillReceiveProps() {
        log('INFO', 'Tasks -> componentWillReceiveProps')

        this.handleRefreshTasks()
    }



    handleRefreshTasks = () => {
        log('INFO', 'Tasks -> handleRefreshTasks')

        try {

            const tasks = retrieveTasks(user.email)

            this.setState({ tasks })

        } catch (error) {

            alert(error.message)
        }
    }

    handleAddTask = () => {
        log('INFO', 'Tasks -> handleAddTask')

        try {
            createTask(user.email)

            this.handleRefreshTasks()
            
          } catch (error) {

            alert(error.message)
          }
    }

render() {
    log('INFO', 'Tasks -> render')

    return <section className="flex flex-col items-center bg-[#D3EBCD] h-screen mt-12">
    <h2 className="p-4">Tasks</h2>
    <div className="flex flex-col sm:flex-row gap-20 bg-[#AEDBCE]">
        <section className="flex flex-col gap-2 border-2 p-2">
            <h2 className="flex flex-col items-center">TODO</h2>
            {this.state.tasks.filter(task => task.status === 'todo').map(task => 
                <Task
                    key={task.id}
                    task={task}
                    onDeleteTask={this.handleRefreshTasks}
                    onUpdateTaskStatus={this.handleRefreshTasks}
                    alternateStatuses={['DOING', 'D0NE']}
                />
            )}
            <button className="material-symbols-outlined" onClick={this.handleAddTask}>add</button>
        </section>
        <section className="flex flex-col gap-2 border-2 p-2">
            <h2 className="flex flex-col items-center">DOING</h2>
            {this.state.tasks.filter(task => task.status === 'doing').map(task => 
                <Task
                    key={task.id}
                    task={task}
                    onDeleteTask={this.handleRefreshTasks}
                    onUpdateTaskStatus={this.handleRefreshTasks}
                    alternateStatuses={['TODO', 'D0NE']}
                />
            )}
            <button className="material-symbols-outlined" onClick={this.handleAddTask}>add</button>
        </section>
        <section className="flex flex-col gap-2 border-2 p-2">
            <h2 className="flex flex-col items-center">DONE</h2>
            {this.state.tasks.filter(task => task.status === 'done').map(task => 
                <Task
                    key={task.id}
                    task={task}
                    onDeleteTask={this.handleRefreshTasks}
                    onUpdateTaskStatus={this.handleRefreshTasks}
                    alternateStatuses={['TODO', 'DOING']}
                />
            )}
            <button className="material-symbols-outlined" onClick={this.handleAddTask}>add</button>
        </section>
    </div>
    </section>
    }
}




