class App extends React.Component {
    constructor() {
        log('INFO', 'App -> constructor')

        super()

        this.state = { view: 'login' }
    }

    componentDidMount() {
        log('INFO', 'App -> componentDidMount')
    }

    componentWillUnmount() {
        log('INFO', 'App -> componentWillUnmount')
    }

    handleNavigateToRegister = () => this.setState({ view: 'register' })

    handleNavigateToLogin = () => this.setState({ view: 'login' })

    handleNavigateToHome = () => this.setState({ view: 'home' })

    render() {
        log('INFO', 'App -> render')

        return <>
            {this.state.view === 'login' && <LoginPage onNavigateToRegister={this.handleNavigateToRegister} onLoggedIn={this.handleNavigateToHome} />}
            
            {this.state.view === 'register' && <RegisterPage onNavigateToLogin={this.handleNavigateToLogin} />}

            {this.state.view === 'home' && <HomePage onLoggedOut={this.handleNavigateToLogin} />}
        </>
    }
}