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


    render() {
        log('INFO', 'Header -> render')
       
       return <header className="flex flex-col">
            <div className="flex justify-between">
                <span className="font-extrabold italic my-8 ml-3">
                    {user && user.name}
                </span>
                <a href="" onClick={this.handleNavigateToTasks}>
                    <img src="https://1000logos.net/wp-content/uploads/2021/05/Trello-logo.png" className=" h-20 w-30 " /></a>
                <button className="flex flex-col justify-center material-symbols-outlined" onClick={this.handleToggleMenu}>{this.state.toggleButtonText}</button>
            </div>
            {/*si se muestra los elementos del settings, el menu se muetra como close(X) y sino se muestra el icono de menu*/}
            {this.state.toggleButtonText === 'close' &&
                <div className="flex flex-col justify-end">
                    <a className="items-end material-symbols-outlined" href="" onClick={this.handleNavigateToSettings}>settings</a>
                    <button className=" material-symbols-outlined" onClick={this.handleLogout}>logout</button>
                </div>}
        </header>
    }
}