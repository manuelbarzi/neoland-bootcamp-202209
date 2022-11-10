class App extends React.Component {
    constructor() {
        log('INFO', 'constructor()', 'components/LogSystem.jsx')

        super()

        this.state = { view: 'login' }
    }

    componentDidMount() {
        log('INFO', 'componentDidMount', 'components/LogSystem.jsx')
    }

    componentWillUnmount() {
        log('INFO', 'componentWillUnmount', 'components/LogSystem.jsx')
    }
    navigateToRegister = () => this.setState({ view: 'register' })

    navigateToLogin = () => this.setState({ view: 'login' })

    navigateToHome = () => this.setState({ view: 'home' })

    navigateToBatlle = () => this.setState({view: 'battle'})

    render() {
        log('INFO', 'render', 'components/LogSystem.jsx')

        return <>
            {this.state.view === 'login' && <LoginPage onRegisterClick={this.navigateToRegister} onLoggedIn={this.navigateToHome} />}
            
            {this.state.view === 'register' && <RegisterPage onLoginClick={this.navigateToLogin} />}

            {this.state.view === 'home' && <HomePage onLoggedOut={this.navigateToLogin}/>}
        </>
    }
}