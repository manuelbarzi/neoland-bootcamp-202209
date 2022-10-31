class Header extends React.Component {
    constructor() {
        super()

        this.state = {
            toggleButtonText: 'menu'
        }
    }

    handleNavigateToTasks = event => {
        event.preventDefault()

        this.props.onNavigateToTasks()
    }

    handleAddTask = () => {
        try {
            createTask(user.email)

            this.props.onAddTask()
        } catch (error) {
            alert(error.message)
        }
    }

    handleToggleMenu = () => this.setState({ toggleButtonText: this.state.toggleButtonText === 'menu' ? 'close' : 'menu' })

    handleNavigateToSettings = event => {
        event.preventDefault()

        this.setState({ toggleButtonText: 'menu' })

        this.props.onNavigateToSettings()
    }

    handleLogout = () => this.props.onLogout()

    render() {
        return <header className="flex flex-col">
            <div className="flex justify-between">
                <a href="" onClick={this.handleNavigateToTasks}><img src="https://fakeimg.pl/50x25/?text=hola%20mundo&amp;font=lobster" /></a>
                <span>{user && user.name}</span>
                <button className="material-symbols-outlined" onClick={this.handleAddTask}>add</button>
                <button className="material-symbols-outlined" onClick={this.handleToggleMenu}>{this.state.toggleButtonText}</button>
            </div>

            {
                this.state.toggleButtonText === 'close' && <div className="flex flex-col items-center">
                    <a className="material-symbols-outlined" href="" onClick={this.handleNavigateToSettings}>settings</a>
                    <button className="material-symbols-outlined" onClick={this.handleLogout}>logout</button>
                </div>
            }
        </header>
    }
}