class Home extends React.Component {
    constructor() {
        log('INFO', 'Home -> constructor')

        super()

        this.state = {
            tasks: [],
            view: 'tasks'
        }
    }

    componentWillUnmount() {
        log('INFO', 'Home -> componentWillUnmount')
    }

    handleLogout = () => {
        log('INFO', 'Home -> handleLogout')

        user = null

        this.props.onLogout()
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

    handleUpdateTaskText = (taskId, newText) => {
        log('INFO', 'Home -> handleUpdateTaskText')

        try {
            updateTaskText(user.email, taskId, newText)
        } catch (error) {
            alert(error.message)
        }
    }

    handleDeleteTask = taskId => {
        log('INFO', 'Home -> handleDeleteTask')

        try {
            deleteTask(user.email, taskId)

            const tasks = retrieveTasks(user.email)

            this.setState({ tasks })
        } catch (error) {
            alert(error.message)
        }
    }

    handleAddTask = () => {
        log('INFO', 'Home -> handleAddTask')

        try {
            createTask(user.email)
            
            const tasks = retrieveTasks(user.email)

            this.setState({ tasks })
        } catch (error) {
            alert(error.message)
        }
    }

    handleNavigateToSettings = () => {
        log('INFO', 'Home -> handleNavigateToSettings')

        this.setState({ view: 'settings' })
    }

    handleUpdateTaskStatus = (taskId, newStatus) => {
        log('INFO', 'Home -> handleUpdateTaskStatus')

        try {
            updateTaskStatus(user.email, taskId, newStatus)

            const tasks = retrieveTasks(user.email)

            this.setState({ tasks })
        } catch (error) {
            alert(error.message)
        }
    }

    handleNavigateToTasks = () => {
        log('INFO', 'Home -> handleNavigateToTasks')

        this.setState({ view: 'tasks' })
    }

    render() {
        log('INFO', 'Home -> render')

        return <main className="h-full w-full">
            <Header
                onNavigateToTasks={this.handleNavigateToTasks}
                onAddTask={this.handleAddTask}
                onNavigateToSettings={this.handleNavigateToSettings}
                onLogout={this.handleLogout}
                view={this.state.view}
            />

            {this.state.view === 'tasks' && <Tasks
                tasks={this.state.tasks}
                onUpdateTaskText={this.handleUpdateTaskText}
                onDeleteTask={this.handleDeleteTask}
                onUpdateTaskStatus={this.handleUpdateTaskStatus}
            />}

            {this.state.view === 'settings' && <Settings />}
        </main>
    }
}