class App extends React.Component {
    constructor() {
        log('INFO', 'App -> constructor')

        super()

        // this.state = { view: 'login' }

        // NOTE force user logged in already, to go faster to home page
        user = users[2]
        this.state = { view: 'home' }
    }

    componentDidMount() {
        log('INFO', 'App -> componentDidMount')
    }

    componentWillUnmount() {
        log('INFO', 'App -> componentWillUnmount')
    }

    handleNavigateToRegister = () => {
        log('INFO', 'App -> handleNavigateToRegister')

        this.setState({ view: 'register' })
    }

    handleNavigateToLogin = () => {
        log('INFO', 'App -> handleNavigateToLogin')

        this.setState({ view: 'login' })
    }

    handleNavigateToHome = () => {
        log('INFO', 'App -> handleNavigateToHome')

        this.setState({ view: 'home' })
    }

    render() {
        log('INFO', 'App -> render')

        return <>
            {this.state.view === 'login' && <Login onNavigateToRegister={this.handleNavigateToRegister} onLogin={this.handleNavigateToHome} />}
            
            {this.state.view === 'register' && <Register onNavigateToLogin={this.handleNavigateToLogin} />}

            {this.state.view === 'home' && <Home onLogout={this.handleNavigateToLogin} />}
        </>
    }
}