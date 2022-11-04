class Navbar extends React.Component {
    constructor() {
        super()

        this.state = {
            toggleButtonText: 'menu'
        }

    }


    componentDidMount() {
        log('INFO', 'Header -> componentDidMount')
    }

    componentWillUnmount() {
        log('INFO', 'Header -> componentWillUnmount')
    }

    handleToggleMenu = () => this.setState({ toggleButtonText: this.state.toggleButtonText === 'menu' ? 'close' : 'menu' })

    handleNavigateToTasks = event => {
        log('INFO', 'Header -> handleNavigateToTasks')

        event.preventDefault()

        this.props.onNavigateToTasks()
    }



    handleNavigateToSettings = event => {
        console.log('Navigating to settings')
        event.preventDefault()

        this.setState({ toggleButtonText: 'menu' })
        this.props.onNavigateToSettings()
    }

    handleCreateTask = () => {

        this.props.onAddTask()

    }

    handleLogout = () => {
        this.props.onLoggedOut()
    }



    render() {
        return <header className="fixed flex justify-between bg-pink-600 w-full">
            <div className="homepage-header-left-group">
                <span className="material-symbols-outlined header-icons text-white">home</span>
            </div>
            <div className="homepage-header-right-group">
                <span id="username-header-span" className="text-white">{user && user.name}</span>
                <span className="material-symbols-outlined header-icons text-white" onClick={this.handleCreateTask}>add</span>
                <span className="material-symbols-outlined header-icons text-white" onClick={this.handleToggleMenu}>{this.state.toggleButtonText}</span>
            </div>

            {
                this.state.toggleButtonText === 'close' && <div className="flex flex-col items-center text-white">
                    <a className="material-symbols-outlined text-white" href="" onClick={this.handleNavigateToSettings}>settings</a>
                    <button className="material-symbols-outlined text-white" onClick={this.handleLogout}>logout</button>
                </div>
            }
        </header >

    }

}