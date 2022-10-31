class Header extends React.Component {
    constructor(){
        log('INFO', 'Header -> constructor')

        super ()

        this.state = {
            toggleButtonText:'menu'
        }
    }

    componentDidMount() {
        log('INFO', 'Header -> componentDidMount')
    }

    componentWillUnmount() {
        log('INFO', 'Header -> componentWillUnmount')
    }

    handleNavigateToTasks = event => {
        log('INFO', 'Header -> handleNavigateToTasks')

        event.preventDefault()

        this.props.onNavigateToTasks()
    }

    handleAddTask = () => {
        log('INFO', 'Header -> handleAddTask')
        
        this.props.onAddTask()
    }

    handleToggleMenu = () => {
        log('INFO', 'Header -> handleToggleMenu')

        this.setState({ toggleButtonText: this.state.toggleButtonText === 'menu' ? 'close' : 'menu' })
    }


    handleNavigateToSettings = event => {
        log('INFO', 'Header -> handleNavigateToSettings')

        event.preventDefault()

        this.setState({ toggleButtonText: 'menu' })

        this.props.onNavigateToSettings()
    }

    handleLogout = () => {
        log('INFO', 'Header -> handleLogout')

        this.props.onLogout()
    }

    handleReturnHome = event => {
        event.preventDefault()
    
        // this.setState({view: 'tasks'})
        this.props.onNavigateToHome
      }

    render () {
        log('INFO', 'Header -> render')

        return <header className="pr-4 pl-2 bg-white w-full flex place-content-between items-center">
        <a href=" " onClick={this.handleReturnHome}>
          <img className="w-16" src="https://cdn.iconscout.com/icon/free/png-256/trello-14-1175081.png"/>
        </a>
        <span>{user && user.name}</span>
        <button className="home-header-button material-symbols-outlined" onClick={this.handleAddTask}>add</button>
        <button
          className="home-header-button material-symbols-outlined"
          onClick={this.handleToggleMenu}>
          {this.state.toggleButtonText}
        </button>

        {this.state.toggleButtonText === "close" && 
          <div className="absolute top-16 right-0 flex justify-end">
            <div className="bg-blue-500 w-40 flex flex-col items-center p-2 gap-2">
              <a className="text-white material-symbols-outlined" href="" onClick={this.handleNavigateToSettings}>
                settings
              </a>

              <button
                className="text-white material-symbols-outlined"
                onClick={this.handleLogout}>logout</button>
            </div>
          </div>
        }
        </header>
    }
}