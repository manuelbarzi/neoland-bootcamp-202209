class App extends React.Component {
    constructor() {
        log('INFO', 'App -> constructor')

        super()

        this.state = { view: 'LoginPage' }
    }

    componentDidMount() {
        log('INFO', 'App -> componentDidMount')
    }

    navigateToRegister = () => this.setState({ view: 'RegisterPage' })
    navigateToLogin = () => this.setState({ view: 'LoginPage' })
    navigateToHome = () => this.setState({ view: 'HomePage' })
    navigateToSettingsAccount = () => this.setState({ view: 'SettingsAccountPage' })

    render() {
        log('INFO', 'App -> render')

        return <>
            {this.state.view === 'LoginPage' &&
                <LoginPage
                    onRegisterLinkClick={this.navigateToRegister}
                    onLoggedIn={this.navigateToHome}
                />}

            {this.state.view === 'RegisterPage' &&
                <RegisterPage
                    onLoginLinkClick={this.navigateToLogin}
                    onRegisterSuccess={this.navigateToLogin}
                />}

            {this.state.view === 'HomePage' &&
                <HomePage
                    onLoggedOut={this.navigateToLogin}
                    onSettingsAccountLink={this.navigateToSettingsAccount}
                />}

            {this.state.view === 'SettingsAccountPage' &&
                <SettingsAccountPage
                    onLoggedOut={this.navigateToLogin}
                    onHomePageLink={this.navigateToHome}
                />}
        </>
    }
}