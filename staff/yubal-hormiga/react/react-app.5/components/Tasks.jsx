class Tasks extends React.Component {
    constructor() {
        log('INFO', 'Tasks -> constructor')

        super()

        this.state = { tasks: [] }
    }

    componentDidMount() {
        log('INFO', 'Tasks -> componentDidMount')

        this.handleRefreshTasks()
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

    render() {
        log('INFO', 'Tasks -> render')

        return <section className="flex flex-col items-center">
            <h2>Tasks</h2>
            <div className="flex flex-col sm:flex-row gap-4">
                <section className="flex flex-col gap-2 border-2 p-2">
                    <h2>TODO</h2>
                    {this.state.tasks.filter(task => task.status === 'todo').map(task =>
                        <Task
                            key={task.id}
                            task={task}
                            onDeleteTask={this.handleRefreshTasks}
                            onUpdateTaskStatus={this.handleRefreshTasks}
                        />
                    )}
                </section>
                <section className="border-2 p-2">
                    <h2>DOING</h2>
                    {this.state.tasks.filter(task => task.status === 'doing').map(task => <Task
                        key={task.id}
                        task={task}
                        onDeleteTask={this.handleRefreshTasks}
                        onUpdateTaskStatus={this.handleRefreshTasks}
                    />)}
                </section>
                <section className="border-2 p-2">
                    <h2>DONE</h2>
                    {this.state.tasks.filter(task => task.status === 'done').map(task => <Task
                        key={task.id}
                        task={task}
                        onDeleteTask={this.handleRefreshTasks}
                        onUpdateTaskStatus={this.handleRefreshTasks}
                    />)}
                </section>
            </div>
        </section>
    }
}