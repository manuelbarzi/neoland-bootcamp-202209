class Header extends React.Component {
    constructor() {
        log('INFO', 'Header -> constructor')
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

    handleNavigateToTasks = event => {
        log('INFO', 'Header -> handleNavigateToTasks')

        event.preventDefault()

        this.props.onNavigateToTasks()
    };

    handleToggleMenu = () => {
        log('INFO', 'Header -> handleToggleMenu')

        this.setState({ toggleButtonText: this.state.toggleButtonText === 'menu' ? 'close' : 'menu'})
    }


    handleNavigateToSettings = event => {
        log('INFO', 'Header -> handleNavigateToSettings')

        event.preventDefault()

        this.setState({ toggleButtonText: 'menu' })

        this.props.onNavigateToSettings()

    };

    handleLogout = () => {
        log('INFO', 'Header -> handleLogout')
        
        this.props.onLogout()
        
    }

    render() {
        log('INFO', 'Header -> render')
        
        return  <header className="flex flex-col shadow-2xl fixed w-full bg-[#635666]">
                    <div className="flex justify-between p-4 ">
                        <a href="" onClick={this.handleNavigateToTasks}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/100px-Trello-logo-blue.svg.png" className=""/></a>
                        
                        <span className="">{user && user.name}</span>
                        <div className="flex">
                            <button className="material-symbols-outlined" onClick={this.handleToggleMenu}>{this.state.toggleButtonText}</button>
                        </div>
                    </div>
                    {this.state.toggleButtonText === 'close' &&
                    <div className="flex flex-col items-end">
                        <button className="material-symbols-outlined" onClick={this.handleNavigateToSettings}>settings</button>
                        <button className="material-symbols-outlined" onClick={this.handleLogout}>logout</button>
                    </div>
                    }
                </header>
    }
}