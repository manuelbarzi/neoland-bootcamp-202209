class HomePage extends React.Component {
    constructor() {
        log('INFO', 'HomePage -> render')

        super()

        this.state = { view: 'tasks', timestamp: Date.now() }
    }

    componentDidMount() {
        log('INFO', 'Home -> componentDidMount')

    }
    componentWillUnmount() {
        log('INFO', 'Home -> componentWillUnmount')
    }

    componentWillReceiveProps() {
        log('INFO', 'Home -> componentWillReceiveProps')
    }

    handleLogout = () => {
        log('INFO', 'Home -> handleLogout')

        user = null

        this.props.onLogout()
    }


    handleNavigateToSettings = () => {
        log('INFO', 'Home -> handleNavigateToSettings')

        this.setState({ view: 'settings' })
    }

    handleNavigateToTasks = () => {
        log('INFO', 'Home -> handleNavigateToTasks')

        this.setState({ view: 'tasks' })

    }

    render() {
        log('INFO', 'Home -> render')

        return <main className="min-h-screen w-full ">
            <Header
                onNavigateToTasks={this.handleNavigateToTasks}
                onAddTask={this.handleAddTask}
                onNavigateToSettings={this.handleNavigateToSettings}
                onLogout={this.handleLogout}
                view={this.state.view}
            />

           {this.state.view === 'tasks' && <Tasks />}
            
            {this.state.view === 'settings' && <Settings />}
        </main>
    }
}