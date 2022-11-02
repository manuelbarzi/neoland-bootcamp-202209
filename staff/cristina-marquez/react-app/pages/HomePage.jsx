class HomePage extends React.Component {
    constructor() {

        super()
        this.state = { view: "tasks" }

    }


    componentDidMount() {
        log('INFO', 'Home component mounted')
        try {
            const tasks = retrieveTasks(user.email)

            this.setState({ tasks })
        } catch (error) {
            alert(error.message)
        }
    }


    handleCreateTask = () => {

        try {
            createTask(user.email)

            const tasks = retrieveTasks(user.email)

            this.setState({ tasks })
        } catch (error) {
            alert(error.message)
        }
    }


    handleUpdateTaskText = (taskId, newText) => {
        try {
            updateTaskText(user.email, taskId, newText)
        } catch (error) {
            alert(error.message)
        }
    }

    handleUpdateTaskStatus = (taskId, newStatus) => {
        try {

            updateTaskStatus(taskId, newStatus)

            const tasks = retrieveTasks(user.email)

            this.setState({ tasks })
        } catch (error) {
            alert(error.message)
        }
    }

    handleDeleteTask = (taskId) => {
        try {
            deleteTask(taskId)

            const tasks = retrieveTasks(user.email)

            this.setState({ tasks })
        } catch (error) {
            alert(error.message)
        }
    }

    handleNavigateToSettings = () => {
        log('INFO', 'navigating to settings')

        this.setState({ view: 'settings' })
    }

    handleLogout = () => {

        user = null

        this.props.onLoggedOut()
    }

    render() {
        return <main className="min-h-screen">


            <Navbar

                onAddTask={this.handleCreateTask}
                onNavigateToSettings={this.handleNavigateToSettings}
                onLoggedOut={this.handleLogout}
                view={this.state.view}
            />
            {this.state.view === 'settings' && <Settings />}
            {this.state.view === 'tasks' && <Tasks />}



        </main>

    }
}